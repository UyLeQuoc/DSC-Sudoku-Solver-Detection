import {useState} from 'react'
import styled from 'styled-components'
import { Button, Modal } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const WrappedButton = styled(Button)`
  margin: 30px 0;
`

function SudokuModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <WrappedButton type="primary" size='large' icon={<ArrowRightOutlined />} onClick={showModal}>Get Started!</WrappedButton>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
}

export default SudokuModal