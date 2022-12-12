import { Typography, Space } from 'antd';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #07FF8A;
  /* opacity: 0.5; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 100px 0;
  align-items: center;
  color: '#002333';
  z-index: 100;

  .text-animation{
    font-size: 25px;
    font-weight: 500;

    @media (max-width: 1180px) {
      font-size: 20px;
      font-weight: 500;
    }

  }

  .slogan{
    font-size: 20px;

    @media (max-width: 1180px) {
      font-size: 15px;
      font-style: italic;
      font-weight: 400;
    }
  }
  
`

export default function Loading(){
  return (
    <LoadingWrapper>
      <Image src="/DSC_LOADING.gif" alt="loading" width={500} height={282}/>
      <Space align="center" direction="vertical" style={{marginTop:'-50px'}}>
      <TypeAnimation
        // Same String at the start will only be typed once, initially
        sequence={[
        'We are FPTU DSC.',
        1000,
        'We are Developer Student Community.',
        1000,
        'Eat. Sleep. Code. Repeat.',
        1000,
        ]}
        speed={30} // Custom Speed from 1-99 - Default Speed: 40
        className="text-animation"
        wrapper="span" // Animation will be rendered as a <span>
        repeat={Infinity} // Repeat this Animation Sequence infinitely
      />
        <Typography.Text className='slogan'>&quot;Bridging the Gap between Theory and Practice&quot;</Typography.Text>
      </Space>
    </LoadingWrapper>
  )
}