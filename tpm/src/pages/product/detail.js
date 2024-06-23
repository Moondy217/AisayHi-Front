import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
    { id: 1, name: '프리미엄 러프그로스지 몽블랑(Montblanc) 랑데뷰 미니카드', price: '9,950원', image: `${process.env.PUBLIC_URL}/img/main/section1/1.jpg` },
    { id: 2, name: 'A5 하드커버 스크랩 만년 다이어리', price: '9,800원', image: `${process.env.PUBLIC_URL}/img/main/section1/2.jpg` },
    { id: 3, name: '퀜처 H2.0 플로우 스테이트 텀블러', price: '49,000원', image: `${process.env.PUBLIC_URL}/img/main/section1/3.jpg` },
    { id: 4, name: '가죽 데스크 매트 책상 패드 테이블 논슬립 와이드 대형 마우스 장패드', price: '9,900원', image: `${process.env.PUBLIC_URL}/img/main/section1/4.jpg` },
    { id: 5, name: '지브라 75 골프 장우산', price: '11,610원', image: `${process.env.PUBLIC_URL}/img/main/section2/5.jpg` },
    { id: 6, name: '24K 튼튼한 파스텔 고급 자동 장우산', price: '18,100원', image: `${process.env.PUBLIC_URL}/img/main/section2/6.jpg` },
    { id: 7, name: '홈 철제 메쉬 우산꽂이', price: '8,980원', image: `${process.env.PUBLIC_URL}/img/main/section2/7.jpg` },
    { id: 8, name: '홈플래닛 습기제거제, 260g, 24개', price: '18,690원', image: `${process.env.PUBLIC_URL}/img/main/section2/8.jpg` },
    { id: 9, name: 'LED 팝 미러클락 미니 탁상시계', price: '9,700원', image: `${process.env.PUBLIC_URL}/img/main/section3/9.jpg` },
    { id: 10, name: '레인보우 LED 책상 스탠드 컬러 무드등 학습용 조명', price: '28,600원', image: `${process.env.PUBLIC_URL}/img/main/section3/10.jpg` },
    { id: 11, name: '오리 연필꽂이 펜 필기구 책상 정리함', price: '9,900원', image: `${process.env.PUBLIC_URL}/img/main/section3/11.jpg` },
    { id: 12, name: '망고 가죽 마우스 패드 SOL7PM', price: '5,900원', image: `${process.env.PUBLIC_URL}/img/main/section3/12.jpg` },
];

const Detail = () => {
    const { id } = useParams();
    const product = products.find(item => item.id === parseInt(id));

    if (!product) {
        return <div>상품을 찾을 수 없습니다.</div>;
    }

    return (
        <div>
            <div>
                <img src={product.image} alt={product.name} />
            </div>
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                {/* 기타 상품 정보 추가 */}
            </div>
        </div>
    );
};

export default Detail
