import React from 'react';
import styles from '../../css/Main.module.css';

function MainGreyBox () {

    // 상품 목록 박스 개수
    const boxes = [1, 2, 3, 4, 5];
    const items = ["사무용품", "생활용품", "식/음료", "PC/주변기기", "전산소모품"];

    return (
      <div className={styles.greyBox}>
        {boxes.map((box, index) => (
          <div key={index} className={styles.greySmallBox}>
            Box {box}
            {/* 각 박스의 해당 텍스트 */}
            <div className={styles.innerBox}>
              <div>{items[index]}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default MainGreyBox