import React from 'react';
import { useParams } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import styles from '../../css/Detail.module.css';

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
        <div className={styles.container}>
            <div className={styles.detailBox}>
                <img src={product.image} alt={product.name} className={styles.image}/>
                <div className={styles.productDetails}>
                    <p className={styles.productName}>{product.name}</p>
                    <p className={styles.productPrice}>{product.price}</p>

                    <p className={styles.productShipInfo}>
                        <strong>배송정보</strong>
                        <p>일반배송<span className={styles.textGrey}> | </span>2,500원(20,000원 이상 무료배송)</p>
                        <span className={styles.textMargin}></span>더포터마켓 배송<span className={styles.textGrey}> | </span>평균 5일 이내 배송
                        <p>포터드림<span className={styles.textGrey}> | </span>2,500원 또는 5,000원</p>
                        <p>픽업 <span className={styles.pickTextMargin}></span><span className={styles.textGrey}> | </span>배송비 조건 없음</p>     
                    </p>


                    <p className={styles.producPaytInfo}>
                        <p><strong>결제혜택</strong></p>
                        <span>THE CJ 카드 추가 10%할인</span><br/>
                        <span>POTER 카드 추가 15% 할인</span>
                        <p>POTER POST 포인트 최대 2% 적립 예상</p>     
                    </p>

                    <div>
                        <Dropdown data-bs-theme="dark">
                            <Dropdown.Toggle className={styles.customDropdown} id="" variant="secondary">
                            상품을 선택해 주세요
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" active>
                                Action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="d-inline-flex">
                            <Dropdown className="me-2">
                                <Dropdown.Toggle className={styles.customDropdownCart} id="dropdown1" variant="secondary">
                                장바구니
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action 1</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle className={styles.customDropdownPay} id="" variant="secondary">
                                바로구매
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-3">Action 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Another action 2</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>



                    </div>
                </div>
            </div>

            <div>얍</div>



        </div>
    );
};

export default Detail
