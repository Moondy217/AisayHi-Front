import React from 'react';
import Slider from 'react-slick';
import styles from '../../css/MainPage.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 넘기기 버튼
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.customArrow}`}
        style={{ ...style, display: 'block', left: '10px' }}
        onClick={onClick}
      >
        &lt;
      </div>
    );
  }
  
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.customArrow}`}
        style={{ ...style, display: 'block', right: '10px' }}
        onClick={onClick}
      >
        &gt;
      </div>
    );
  }
  

function MainPage() {

    const bannerImg = [
        `${process.env.PUBLIC_URL}/img/main/banner/배너1.svg`,
        `${process.env.PUBLIC_URL}/img/main/banner/배너3.svg`,
        `${process.env.PUBLIC_URL}/img/main/banner/배너2.svg`
      ];

      const section1Images = [
        { path: `${process.env.PUBLIC_URL}/img/main/section1/1.jpg`, name: '프리미엄 러프그로스지 몽블랑(Montblanc) 랑데뷰 미니카드', price: '9,950원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section1/2.jpg`, name: 'A5 하드커버 스크랩 만년 다이어리', price: '9,800원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section1/3.jpg`, name: '퀜처 H2.0 플로우 스테이트 텀블러', price: '49,000원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section1/4.jpg`, name: '가죽 데스크 매트 책상 패드 테이블 논슬립 와이드 대형 마우스 장패드', price: '9,900원' },
      ];

      const section2Images = [
        { path: `${process.env.PUBLIC_URL}/img/main/section2/5.jpg`, name: '지브라 75 골프 장우산', price: '11,610원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section2/6.jpg`, name: '24K 튼튼한 파스텔 고급 자동 장우산', price: '18,100원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section2/7.jpg`, name: '홈 철제 메쉬 우산꽂이', price: '8,980원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section2/8.jpg`, name: '홈플래닛 습기제거제, 260g, 24개', price: '18,690원' },
      ];

      const section3Images = [
        { path: `${process.env.PUBLIC_URL}/img/main/section3/9.jpg`, name: 'LED 팝 미러클락 미니 탁상시계', price: '9,700원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section3/10.jpg`, name: '레인보우 LED 책상 스탠드 컬러 무드등 학습용 조명', price: '28,600원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section3/11.jpg`, name: '오리 연필꽂이 펜 필기구 책상 정리함', price: '9,900원' },
        { path: `${process.env.PUBLIC_URL}/img/main/section3/12.jpg`, name: '망고 가죽 마우스 패드 SOL7PM', price: '5,900원' },
      ];
    
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
      };


  return (
    <div className={styles.container}>
        <div className={styles.mainBox}>

            <div className={styles.banner}>
                <Slider {...settings}>
                {bannerImg.map((img, index) => (
                    <div key={index}>
                    <img src={img} alt={`배너 ${index + 1}`} className={styles.bannerImage} />
                    </div>
                ))}
            </Slider>
        </div>
            {/* 섹션 1 */}
            <div className={styles.recoSection}>
                <p className={styles.firstP}>으쌰으쌰!</p>
                <p className={styles.secondP}>
                소속감을 높이는 {' '}
                <span className={styles.boldText}>신입사원 웰컴키트</span>
                </p>

                <div className={styles.imageContainer}>
                    {/* section1Images 배열을 map 함수로 순회하면서 이미지 박스 생성 */}
                    {section1Images.map((item, index) => (
                    <div key={index} className={styles.imageBox}>
                        <img src={item.path} alt={item.name} className={styles.image} />
                        <div className={styles.imageText}>
                            <p className={styles.productName}>{item.name}</p>
                            <p className={styles.productPrice}>{item.price}</p>
                        </div>
                    </div>
                    ))}
                </div>

            </div>

            <div className={styles.recoSection}>

                <div className={styles.recoSection}>
                <p className={styles.firstP}>비를 피하는 법</p>
                    <p className={styles.secondP}>
                    <span className={styles.boldText}>장마철{' '}</span>
                    필수 상품들
                    </p>

                    <div className={styles.imageContainer}>
                        {section2Images.map((item, index) => (
                        <div key={index} className={styles.imageBox}>
                            <img src={item.path} alt={item.name} className={styles.image} />
                            <div className={styles.imageText}>
                                <p className={styles.productName}>{item.name}</p>
                                <p className={styles.productPrice}>{item.price}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className={styles.recoSection}>
            <p className={styles.firstP}>찰떡템으로 책(상)꾸(미기)</p>
                <p className={styles.secondP}>
                찰떡{' '}
                <span className={styles.boldText}>업무환경{' '}</span>
                꾸미기
                </p>

                <div className={styles.imageContainer}>
                    {section3Images.map((item, index) => (
                    <div key={index} className={styles.imageBox}>
                        <img src={item.path} alt={item.name} className={styles.image} />
                        <div className={styles.imageText}>
                            <p className={styles.productName}>{item.name}</p>
                            <p className={styles.productPrice}>{item.price}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>




        </div>

    </div>
  );
}

export default MainPage