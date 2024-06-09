import React from 'react';

function SubMenu() {
  return (
    <div>
      <style jsx>{`
        .sub-menu {
          display: flex;
          justify-content: center;
          background-color: white;
          border: 2px solid #3B6EF1;
          border-top: None;
          border-bottom: None;
          margin: 0 104px;
          
        }

        .sub-menu-item {
          margin-right: 0; /* 오른쪽 마진값 제거 */
          border: 1px solid #3B6EF1;
          border-top: None;
          border-right-width: 2px;
          cursor: pointer;
          padding: 8px 12px;
          flex: 1;
          text-align: center;
        }

        .sub-menu-item:hover {
          background-color: #f1f1f1;
        }

      `}</style>
      <div className="sub-menu">
        <div className="sub-menu-item">사무용품</div>
        <div className="sub-menu-item">생활용품</div>
        <div className="sub-menu-item">식/음료</div>
        <div className="sub-menu-item">PC/주변기기</div>
        <div className="sub-menu-item">전산소모품</div>
      </div>
    </div>
  );
}

export default SubMenu;

