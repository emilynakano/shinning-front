import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiUser } from 'react-icons/fi';
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { useAuth } from '../hooks/useAuth';
import Img from '../assets/images/ghost.png';

export default function HeaderUser() {
  const { logout } = useAuth();
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <img onClick={() => navigate('/home')} src={logo} alt="shinning" />
        <Main>
          <h1
            className="notes"
            onClick={() => navigate('/notes')}
          >
            notes
          </h1>
          <h1
            className="today"
            onClick={() => navigate('/notes/today')}
          >
            today
          </h1>
          <img onClick={() => setClick(!click)} src={Img} alt="img" />
        </Main>
      </Container>
      <Account click={click}>
        <Content>
          <div>
            <FiUser />
            <h1>Account</h1>
          </div>
          <div>
            <FiLogOut />
            <h1>Logout</h1>
          </div>
        </Content>
      </Account>
    </>

  );
}

const Account = styled.div`
  width: 100%;
  display:flex;
  justify-content:end;
  position:fixed;
  h1 {
    font-size: 13px;
    font-weight: 800;
  }
  transform: ${(props) => (props.click ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in;
`;

const Content = styled.div`
  border-radius: 0 0 7px 7px;
  display:flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  justify-content:center;
  background:white;
  div {
    cursor: pointer;
    display: flex;
    align-items:center;
    gap: 6px;
    transition: color 0.2s;
    &:hover {
      color: rgba(180,45,45,1);;
    }
  }
`;

const Container = styled.div`
    background: #100E0E;
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding: 0 20px;
    height: 60px;
    box-shadow: 0px 1px 1px rgba(253, 253, 253, 0.1);
    img {
      height: 40px;
    }
`;

const Main = styled.div`
    display: flex;
    align-items:Center;
    gap: 10px;
    color:white;
    font-size:20px; 
    h1 {
      cursor:pointer;
    }   
    .notes:hover {
      text-shadow: 2px 2px  red;
    }
    .today:hover {
      text-shadow: 2px 2px  red;
    }
    transition: all .4s ease-in-out;
    img {
        border-radius: 100px;
        border: solid 1px white;
        height: 30px;
        width: 30px;
        margin-left: 10px;
    }
`;
