import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store';

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleLogout = () => {
      localStorage.removeItem('token'); // 토큰 제거
      dispatch(logout()); // 리덕스 스토어에 로그아웃 액션 디스패치
      navigate('/'); // 메인 페이지로 이동
    };
  
    return (
      <div>
        <h2>로그아웃</h2>
        {handleLogout()}
      </div>
    );
  }
  
  export default Logout;