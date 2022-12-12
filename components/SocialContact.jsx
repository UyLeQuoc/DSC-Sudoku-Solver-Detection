import { FacebookFilled, YoutubeFilled } from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';

function SocialContact() {
  return (
    <Social>
      <div className='title'>Contact: </div>
      <a href='https://www.facebook.com/fptudsc' target="_blank">
        <WrappedIcon>
          <FacebookFilled className='icon facebook-icon' />
        </WrappedIcon>
      </a>
      <a href='https://www.youtube.com/@FPTUDeveloperStudentCommunity' target="_blank">
        <WrappedIcon>
          <YoutubeFilled className='icon youtube-icon' />
        </WrappedIcon>
      </a>
    </Social>
  )
}

export default SocialContact

const Social = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  flex-flow: row;
  gap: 5px;

  .title{
    font-size: 14px;
    font-weight: 500;
    margin-right: 5px;
  }
  
`

const WrappedIcon = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: #EEEAF9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  .icon{
    font-size: 16px;
    transition: opacity 0.5s ease-in-out;

    :hover{
      opacity: 0.8;
    }
  }
  .facebook-icon{
    color: #4267B2;
  }
  .youtube-icon{
    color: #FF0000;
  }
`