import React from 'react';

function SubMenu() {

  // 세로 줄 아이템
  const items1 = ["사무용품", "복사용지", "컬러레이저용지", "바인더", "노트/다이어리/수첩"];
  const items2 = ["생활용품", "사무실용품", "청소용품", "위생용품", "향균/방충/방향제"];
  const items3 = ["식/음료", "커피/차", "생수/음료", "과자/시리얼", "사탕/초콜릿"];
  const items4 = ["PC/주변기기", "노트북", "태블릿", "키보드", "마우스"];
  const items5 = ["전산소모품", "네트워크 장비", "모바일 용품", "전산 사무기기", "저장기기"];

  return (
    <div>
      <style jsx>{`
        .sub-container {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .sub-menu {
          justify-content: center;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(5, 1fr);
          background-color: white;
          border: 1px solid #3B6EF1;
          border-top: none;
          border-bottom: 2px solid #3B6EF1;
          width: 1350px;
          height: 230px;
          overflow: hidden;
        }

        .sub-menu-item {
          border: 1px solid #3B6EF1;
          border-top: none;
          border-top: none;
          border-bottom: none;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          cursor: pointer;
          font-size: 16px;
          height: 46px; /* 내부 요소들을 꽉 차게 230 % 5 */
        }

        .sub-menu-column {
          flex-direction: column;
        }

        .sub-menu-item:first-child {
          font-weight: bold;
          font-size: 17px;
        }

        .sub-menu-item:hover {
        background-color: #f1f1f1;
        }

      `}</style>

<div className="sub-container">
        <div className="sub-menu">
          {/* 아이템 그리드 배치 */}
          <div className="sub-menu-column">{renderItems(items1)}</div>
          <div className="sub-menu-column">{renderItems(items2)}</div>
          <div className="sub-menu-column">{renderItems(items3)}</div>
          <div className="sub-menu-column">{renderItems(items4)}</div>
          <div className="sub-menu-column">{renderItems(items5)}</div>
        </div>
      </div>
    </div>
  );
}

function renderItems(items) {
  return items.map((item, index) => (
    <div key={index} className="sub-menu-item">
      {index === 0 ? <strong>{item}</strong> : item}
    </div>
  ));
}

export default SubMenu;