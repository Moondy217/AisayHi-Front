import './App.css';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess, logoutSuccess } from './store/actions/authActions';
import MainPage from './pages/main/mainPage';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import SubMenu from './pages/main/subMenu';
import SubGreyBox from './pages/main/subGreyBox';
import SearchBar from './pages/main/searchBar';
import Footer from './pages/main/footer';

function App() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false); // 전체 카테고리 상세페이지 모달 창

  // 리덕스 상태 및 디스패치 설정
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const currentUser = useSelector(state => state.auth.user); // 현재 로그인한 사용자 정보
  const dispatch = useDispatch();

  // 페이지 로드 시 로그인 상태 체크
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // 토큰이 있으면 로그인 상태로 설정
      dispatch(loginSuccess()); // 로그인 액션 디스패치
    }
  }, [dispatch]);

  // 전체 카테고리를 클릭하면 모달 창을 토글하고, MainGreyBox를 숨긴다
  const toggleModal = () => {
    setModal(!modal);
  };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    localStorage.removeItem('token'); // 토큰 삭제
    dispatch(logoutSuccess()); // 로그아웃 액션 디스패치
    navigate('/'); // 메인 페이지로 이동
    alert('로그아웃 되었습니다.');
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
              <div className="d-flex align-items-center">
                {isLoggedIn ? (
                  <>
                    <span className="me-2">로그인 중{currentUser?.login_id}</span>
                    <Nav.Link onClick={handleLogout} className="me-2">로그아웃</Nav.Link>
                    <Nav.Link href="/cart">장바구니</Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link onClick={() => navigate('/login')}>로그인</Nav.Link>
                    <Nav.Link onClick={() => navigate('/signup')}>회원가입</Nav.Link>
                  </>
                )}
              </div>
            </Nav>
          </Navbar>
          <Navbar expand="lg" data-bs-theme="dark">
            <Navbar.Brand onClick={toggleModal} style={{ cursor: 'pointer' }}>
            
            {/* 아이콘 <TfiMenu style={{ height: '36.4px'}}/> */}
            
            전체 카테고리</Navbar.Brand>

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
      {modal ? <SubMenu /> : <SubGreyBox />}

      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<div>없는 페이지</div>} />
        </Routes>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
