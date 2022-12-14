import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline'
import Loading from '../components/Loading';
import { Typography } from 'antd';
import SocialContact from '../components/SocialContact';
import { useRouter } from 'next/router';

const AppWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  /* background-color: #A0C0F0; */

  .spline{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    transform: translateX(22%);

    @media (max-width: 1180px) {
      transform: translateY(300px);
    }
  }

`

const Content = styled.div`
  position: absolute;
  padding: 50px 0 0 130px;
  top: 0;
  width: 600px;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1180px) {
    padding: 50px 0 0 50px;
  }
  @media (min-width: 1181px) {
    height: 100vh;
  }
  
  .header{
  }

  .body{
    font-family: 'Spline Sans', Roboto, sans-serif;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1180px) {
      margin-top: 50px;
      justify-content: flex-start;
    }

    .main-title{
      font-weight: 900;
      font-size: 60px;
      margin: 0;
      max-width: 500px;
      pointer-events: auto;
      color: #002333;

      @media (max-width: 768px) {
        font-size: 35px;
      }
    }

    .sub-title{
      font-weight: 900;
      font-size: 50px;
      margin: 0;
      max-width: 500px;
      pointer-events: auto;
      color: #002333;

      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
    

    .description{
      font-size: 16px;
      max-width: 600px;
      pointer-events: auto;
      font-weight: 400;
      margin-top: 10px;
      color: #002333;
    }
  }
`


export default function Home() {
  const router = useRouter();

  console.log("re-render");

  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  // var config = {
  //   onDownloadProgress: (progressEvent) => {
  //     const totalLength = (progressEvent.loaded / progressEvent.total) * 100;
  //     // console.log("onUploadProgress", totalLength);
  //     if (totalLength !== null) {
  //         console.log(Math.round(totalLength));
  //         if(totalLength === 100){
  //           console.log("done");
  //         }
  //     }
  //   }
  // };
  // axios.get('https://prod.spline.design/DN2pV5Tgrip7Mpkz/scene.splinecode', config)
  //   .then(function (res) {
  //     console.log("ok")
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });

  const handleLoad = () => {
    console.log("loaded");
    setIsLoading(false);
  }
  return (
    <>
      <AppWrapper>
        <Spline className="spline" onLoad={handleLoad} scene="https://prod.spline.design/DN2pV5Tgrip7Mpkz/scene.splinecode" />
        <Content>
          {isLoading ? <Loading /> : <></>}
          <div className="header">
            <Image src="/DSC_LOGO.png" alt="DSC Logo" width={100} height={60} />
          </div>
          <div className="body">
            <div>
              <Typography.Title className='main-title' level={1}>Sudoku</Typography.Title>
              <Typography.Title className='sub-title' level={1}>Solver Detection</Typography.Title>
            </div>
            <Typography.Paragraph className='description'>
              Powered by OpenCV and TensorFlow 2.0, with back-tracking algorithm
            </Typography.Paragraph>
            
              <WrappedButton onClick={() => {
                router.push('/sudoku');
              }} />
            <SocialContact />
          </div>
        </Content>
      </AppWrapper>
    </>
  )
}

const WrappedButton = styled.button`
  width: 119px;
  height: 38px;
  padding: 10px 20px;
  background-color: #07FF8A;
  box-shadow: 0px 15px 20px rgba(7, 255, 138, 0.4);
  color: white;
  font-size: 14px;
  position: relative;
  margin: 10px 7px;
  transition: all 1s ease-in-out;
  border: #002234 solid 1px;
  cursor: pointer;
  
  :after{
    content: 'Get Started!';
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: white;
    top: -7px;
    left: -6px;
    width: 119px;
    height: 38px;
    background-color: #002234;
    transition: all 0.5s ease-in-out;
    /* z-index: -1; */
  }

  :hover{
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    :after{
      /* background: #002234; */
      top: -1px;
      left: 0px;
    }
  }
`