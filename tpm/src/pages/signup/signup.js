import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from '../../css/Signup.module.css';

function Singup() {
  const [validated, setValidated] = useState(false); // 유효성 검사
  const [formData, setFormData] = useState({
    username: '', // 이름
    login_id: '', // 아이디
    userpwd: '',  // 비밀번호
    userpwdConfirm: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      if (formData.userpwd !== formData.userpwdConfirm) {
        alert('비밀번호가 맞지 않습니다');
        return;
      }


      // 회원가입 API (주소 확인!!)
      try {
        const response = await fetch('http://localhost:8000/api/signup/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            login_id: formData.login_id,
            userpwd: formData.userpwd,
          }),
        });

        if (response.ok) {
          alert('회원가입 성공');
        } else {
          alert('회원가입 실패');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    }

    setValidated(true);
  };
      


  return (
    <div className={styles.container}>
      <div className={styles.customSignup}>
        <h1>더포마켓 회원가입</h1>


        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group controlId="User">
              <Form.Label></Form.Label>

              <Form.Control
                required
                type="text"
                name="username"
                placeholder="이름"
                className={styles.form}
                value={formData.username}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>

              <Form.Control
                required
                type="text"
                name="login_id"
                placeholder="아이디"
                className={styles.form}
                value={formData.login_id}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>

              <Form.Control
                required
                type="password"
                name="userpwd"
                placeholder="비밀번호"
                className={styles.form}
                value={formData.userpwd}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>

              <Form.Control
                required
                type="password"
                name="userpwdConfirm"
                placeholder="비밀번호 확인"
                className={styles.form}
                value={formData.userpwdConfirm}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            </Form.Group>
          </Row>
      
      <Button type="submit"
      className={styles.formBtn}
      
      >회원가입 완료</Button>
      </Form>


        </div>
    </div>

  );
}

export default Singup;