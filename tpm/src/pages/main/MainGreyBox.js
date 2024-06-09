import React from 'react';
import styles from '../../css/Main.module.css';

function MainGreyBox () {

    // 상품 목록 박스 개수
    const boxes = [1, 2, 3, 4, 5];

    return (

        
    <div className={styles.border}>
        {boxes.map((box, index) => (
        <div key={index} className={styles.greySmallBox}>
          Box {box}
        </div>
      ))}
    </div>

    );
}

export default MainGreyBox