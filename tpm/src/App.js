import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import SubMenu from './pages/main/subMenu';

function App() {

  const navigate = useNavigate();
  const [modal, setModal] = useState(false); // 전체 카테고리 상세페이지 모달 창

  return (
    <div>
      <div className='customNav'>
        <Container>
          <Navbar expand="lg" data-bs-theme="dark">
            <Navbar.Brand href="/">The Porter Market</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link onClick={() => { navigate('/login') }}>로그인</Nav.Link>
              <Nav.Link onClick={() => { navigate('/signup') }}>회원가입</Nav.Link>
            </Nav>
          </Navbar>
          <Navbar expand="lg" data-bs-theme="dark">
            <Navbar.Brand onClick={() => {setModal(!modal) }}>전체 카테고리</Navbar.Brand>
            <Nav className="ms-auto">
            </Nav>
          </Navbar>
        </Container>
      </div>

    {/* 상세 카테고리 모달 창 */}
    {
      modal == true ? <SubMenu/> : null
    }

      <div>
        <Routes>
          <Route path="/" element={<div>메인페이지임</div>}/>
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Signup/>} />
          <Route path="*" element={<div>없는 페이지</div>} />
        </Routes>
      </div>

    </div>
  );
}


export default App;