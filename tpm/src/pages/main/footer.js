import React from 'react';
import styles from '../../css/Footer.module.css';

function Footer() {

  const footerImg = `${process.env.PUBLIC_URL}/img/footerLogo.svg`;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerBox}>
        <div className={styles.footerImgBox}>
          <img src={footerImg} alt="footer" />
        </div>
        <div className={styles.footerTextBox}>
        <span className={styles.footerTextBold}>
            개인정보처리방침 <span className={styles.footerTextGrey}> | </span> 이용약관
          </span>
          <span>(주)더포터마켓 대표 : 손예지 <span className={styles.footerTextGrey}> | </span> 
          TEL:02-0929-1234<span className={styles.footerTextGrey}> | </span>theportermarket@kw.ac.kr</span>

          <span>서울특별시 노원구 광운로 20<span className={styles.footerTextGrey}> | </span>
          통신판매업 신고 : 2024-서울노원-0001호<span className={styles.footerTextGrey}> | </span>
          사업자 등록번호 : 111-11-11111</span>
          <span className={styles.footerTextGrey}>Copyright ⓒ 2024 Theportermarket. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer