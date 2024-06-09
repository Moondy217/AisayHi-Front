import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import SubMenu from './pages/main/SubMenu';

function App() {

  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <div className='border'>
      <Container className="customNav">
        <Navbar variant="dark" expand="lg" data-bs-theme="dark">
          <Navbar.Brand href="/">The Porter Market</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link onClick={() => { navigate('/login') }}>로그인</Nav.Link>
            <Nav.Link onClick={() => { navigate('/signup') }}>회원가입</Nav.Link>
          </Nav>
        </Navbar>
        <Navbar variant="dark" expand="lg" data-bs-theme="dark">
          <Navbar.Brand onClick={() => {setModal(!modal) }}>전체 카테고리</Navbar.Brand>
          <Nav className="ms-auto">
          </Nav>
        </Navbar>
      </Container>


      {/* 상세 카테고리 */}
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