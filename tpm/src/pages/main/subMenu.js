import React from 'react';

function SubMenu() {

  const items = ["사무용품", "생활용품", "식/음료", "PC/주변기기", "전산소모품"];


  return (
    <div>
      <style jsx>{`
        .sub-menu {
          display: flex;
          justify-content: center;
          height: 230px;

          background-color: white;
          border: 1px solid #3B6EF1;
          border-top: None;
          border-bottom: None;
          margin: 0 104px;
          
        }

        .sub-menu-item {
          margin-right: 0; /* 오른쪽 마진값 제거 */
          border: 2px solid #3B6EF1;
          border-top: None;
          border-right-width: 1px;
          cursor: pointer;
          padding: 8px 12px;
          flex: 1;
          text-align: center;
        }

        .sub-menu-item-item:hover {
          background-color: #f1f1f1;
        }

        .sub-menu-item-item {
          border: 1px solid red;
        }

      `}</style>

      <div className="sub-menu">
        {items.map((item, index) => (
          <div key={index} className="sub-menu-item">
            <div className="sub-menu-item-item">{item}</div> {/* 추가된 div */}
          </div>
        ))}
      </div>
    </div>


  );
}

export default SubMenu;

