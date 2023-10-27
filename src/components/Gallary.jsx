import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

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

const Gallary = () => {
  return <>
    <div className={styles.container}>
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
          delay: 700,
          disableOnInteraction: true,
        }}
        initialSlide={1}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {images.map(src =>
          <div className={styles.swiperContainer}>
            <SwiperSlide className={styles.swiperContainer}>
              <img className={styles.swiperImg} src={src} alt={src} />
            </SwiperSlide>
          </div>
        )}
      </Swiper>
    </div>
  </>
}

export default Gallary;
