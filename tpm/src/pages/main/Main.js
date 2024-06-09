import React, { useState } from 'react';
import styles from '../../css/Main.module.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Main() {

    let navigate = useNavigate();

    return (

        <div className={styles.customNav}>
            <Navbar variant="dark" expand="lg" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="/">The Porter Market</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link onClick={() => { navigate('/login') }}>로그인</Nav.Link>
                    <Nav.Link onClick={() => { navigate('/signup') }}>회원가입</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </div>
    )
}

export default Main



