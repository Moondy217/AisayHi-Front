// 로그인 액션 타입 정의
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// 로그인 액션 생성자
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

// 로그아웃 액션 생성자
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
