import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import styles from '../style/Gallary.module.scss';

const images = [
  '/images/wedding/1.jpeg',
  '/images/wedding/2.jpeg',
  '/images/wedding/3.jpeg',
  '/images/wedding/4.jpeg',
  '/images/jeju/1.JPG',
  '/images/jeju/2.JPG',
  '/images/jeju/3.JPG',
  '/images/jeju/4.JPG',
  '/images/jeju/5.JPG',
];

const Gallery = () => {
  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>GALLERY</h2>
      <h1 className={styles.title}>갤 러 리</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        initialSlide={1}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {images.map((src, idx) =>
          <div className={styles.swiperContainer} key={src + idx}>
            <SwiperSlide className={styles.swiperContainer} key={src + idx}>
              <img className={styles.swiperImg} src={src} alt={src + idx} />
            </SwiperSlide>
          </div>
        )}
      </Swiper>

      <div style={{ height: '30vh', width: '100%', backgroundColor: 'rgb(225, 227, 230)', marginTop: '30px' }}></div>
    </div>
  </>
}

export default Gallery;
