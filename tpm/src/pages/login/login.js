import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Row } from 'react-bootstrap';
import styles from '../../css/Login.module.css';

function Login() {
  const [validated, setValidated] = useState(false); // 유효성 검사
  const [formData, setFormData] = useState({
    login_id: '',
    userpwd: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    // 로그인 처리 및 서버에 데이터 전송
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // 로그인 성공 시 메인 페이지로 이동
        navigate('/');
      } else {
        console.error('로그인 실패:', response.status);
      }
    } catch (error) {
      console.error('네트워크 오류:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.customLogin}>
        <h1>더포마켓 로그인</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">

            <Form.Group controlId="login_id">
            <Form.Label></Form.Label>

            <Form.Control
                required
                type="text"
                name="login_id"
                value={formData.login_id}
                onChange={handleChange}
                placeholder="아이디 입력"
                className={styles.formId}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>

            <Form.Control
            required
            type="password"
            name="userpwd"
            value={formData.userpwd}
            onChange={handleChange}
            placeholder="비밀번호 입력"
            className={styles.formPwd}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>

            </Form.Group>
            
        </Row>
        
        <Button type="submit"
        className={styles.formBtn}
        
        >로그인</Button>
        </Form>
        </div>
    </div>
  );
}

export default Login;