import React from 'react';
import styles from '../../css/Main.module.css';

function SubGreyBox () {

    // 상품 목록
    const items = ["사무용품", "생활용품", "식/음료", "PC/주변기기", "전산소모품"];
    const images = [
      `${process.env.PUBLIC_URL}/img/main/사무용품.svg`,
      `${process.env.PUBLIC_URL}/img/main/생활용품.svg`,
      `${process.env.PUBLIC_URL}/img/main/식음료.svg`,
      `${process.env.PUBLIC_URL}/img/main/PC주변기기.svg`,
      `${process.env.PUBLIC_URL}/img/main/전산소모품.svg`
    ];

    // 박스 생성
    const boxes = items.map((item, index) => (
      <div className={styles.innerBox} key={index}>
        <img src={images[index]} alt={item} />
        <p>{item}</p>
      </div>
    ));

    return (
      <div className={styles.greyBox}>
        <div className={styles.outerBox}>
          <div className={styles.horizontalScroll}>
            {boxes}
          </div>
        </div>
      </div>
    );
  }

export default SubGreyBox