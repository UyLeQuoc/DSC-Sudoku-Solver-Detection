import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Button, Col, Divider, message, Modal, Row, Space, Upload, UploadFile, UploadProps } from 'antd';
import { ArrowRightOutlined, InboxOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import SudokuTable from '../components/SudokuTable';
import SampleSudokuImage from '../components/SampleSudokuImage';

const getBase64 = (file): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
});

const WrappedContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .upload-list-inline{
    .ant-upload-drag{
    height: 200px;
    }
  }
`

function SudokuModal() {
  const [sudokuData, setSudokuData] = useState([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]);
  const [sudokuSolveData, setSudokuSolveData] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const props: UploadProps = {
    name: 'file',
    action: 'https://sudoku-solver-detection-api.onrender.com/uploadfiles/',
    className: 'upload-list-inline',
    onPreview: handlePreview,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log("sudoku data: ", info.file.response.content);
        setSudokuSolveData(null)
        setSudokuData(info.file.response.content);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    listType:"picture",
    maxCount: 1,
  };

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const handleSolve = (defaultSudoku) => {
    postData('https://sudoku-solver-detection-api.onrender.com/solve', {
      "board": defaultSudoku,
      "solution_limit": 1
    })
    .then((data) => {
      if((Array.isArray(data.content))){
        setSudokuSolveData(data.content[0])
      }
      else{
        message.error(data.message);
      }
    });
  }
  
  return (
    <WrrapedPageBackground>
    <WrappedPage>
      <Link href="/" className="header">
        <Image src="/DSC_LOGO.png" alt="DSC Logo" width={100} height={60} />
      </Link>
      <WrappedContainer>
        <SudokuTable sudokuData={sudokuData} sudokuSolveData={sudokuSolveData} handleSolve={() => handleSolve(sudokuData)}/>
        <WrappedTutorial>
          <h2>How to use</h2>
          <p className='step'>1. Upload an image of a sudoku puzzle</p>
          <Upload.Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </Upload.Dragger>
          {/* <Divider>OR</Divider>
          <p>Select one of this image to upload</p>
          <SampleSudokuImage /> */}
          <p className='step'>2. Click on the "Solve" button to solve the puzzle</p>
        </WrappedTutorial> 
      </WrappedContainer>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </WrappedPage>
    </WrrapedPageBackground>
  )
}

export default SudokuModal

const WrrapedPageBackground = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #07FF8A;
  overflow-x: hidden;
`

const WrappedPage = styled.div`
  width: 90%;
  /* margin: 50px 0; */
  padding: 40px;
  background-color: white;
  border-radius: 50px;
  overflow-x: hidden;

  @media (max-width: 1180px) {
    padding: 20px;
    width: 100%;
    margin: 0;
    border-radius: 0;
  }

`

const WrappedTutorial = styled.div`
  max-width: 400px;
  padding: 0 20px;

  .step{
    margin-top: 20px;
  }
`

