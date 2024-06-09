import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from '../../css/Signup.module.css';

function Singup() {
  const [validated, setValidated] = useState(false); // 유효성 검사

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
        }
    }

  return (
    <div className={styles.container}>
      <div className={styles.customSignup}>
        <h1>더포마켓 회원가입</h1>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">

            <Form.Group controlId="User"> {/* 디비 명세서 다시 확인할 것*/}
            <Form.Label></Form.Label>

            <Form.Control
                required
                type="text"
                name="username"
                placeholder="이름"
                className={styles.form}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>

            <Form.Control
                required
                type="text"
                name="user_id"
                placeholder="아이디 입력"
                className={styles.form}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>

            <Form.Control
            required
            type="password"
            name="userpwd"
            placeholder="비밀번호"
            className={styles.form}
            />
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>

            <Form.Control
            required
            type="password"
            name="userpwd"
            placeholder="비밀번호 확인"
            className={styles.form}
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