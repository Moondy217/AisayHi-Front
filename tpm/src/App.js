import './App.css';
import { useState } from 'react';
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import SubMenu from './pages/main/subMenu';
import MainGreyBox from './pages/main/mainGreyBox';
import SearchBar from './pages/main/searchBar';

function App() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false); // 전체 카테고리 상세페이지 모달 창

  // 전체 카테고리를 클릭하면 모달 창을 토글하고, MainGreyBox를 숨깁니다.
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className='customNav'>
        <Container>
          <Navbar expand="lg" data-bs-theme="dark">
            <Navbar.Brand href="/">
              <img
                src={process.env.PUBLIC_URL + '/img/tpmLogo.svg'}
                width="100"
                height="50"
                alt="TPM Logo"
              />
        </Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link onClick={() => { navigate('/login') }}>로그인</Nav.Link>
              <Nav.Link onClick={() => { navigate('/signup') }}>회원가입</Nav.Link>
            </Nav>
          </Navbar>
          <Navbar expand="lg" data-bs-theme="dark">
            <Navbar.Brand onClick={toggleModal} style={{ cursor: 'pointer' }}>전체 카테고리</Navbar.Brand>

            <span className="ms-auto">
                <Navbar.Brand className="ms-auto-marginRight">전체 상품 보기</Navbar.Brand>
                <Navbar.Brand className="ms-auto-marginRight">Porter Pick</Navbar.Brand>
                <Navbar.Brand className="ms-auto-marginRight">모바일 상품권</Navbar.Brand>
                <Navbar.Brand className="ms-auto-marginRight">선물하기</Navbar.Brand>
            </span>

            {/* 검색어 입력 */}
            <SearchBar/>
            
          </Navbar>
        </Container>
      </div>

      {/* 모달 창 또는 MainGreyBox를 렌더링 */}
      {modal ? <SubMenu /> : <MainGreyBox />}

      <div>
        <Routes>
          <Route path="/" element={<div>메인페이지임</div>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<div>없는 페이지</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
