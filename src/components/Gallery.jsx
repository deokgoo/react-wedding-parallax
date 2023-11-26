import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Image } from 'antd';

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

const otherImages = [
  '/images/wedding/2.jpeg',
  '/images/wedding/3.jpeg',
  '/images/wedding/4.jpeg',
  '/images/jeju/1.JPG',
  '/images/jeju/2.JPG',
  '/images/jeju/3.JPG',
  '/images/jeju/4.JPG',
  '/images/jeju/5.JPG',
]

const Gallery = () => {
  const swiperRef = useRef(null)

  const handlePreivewVisible = (visible) => {
    console.log(visible);
    swiperRef.current.swiper.autoplay.stop();

    if (visible) swiperRef.current.swiper.autoplay.stop();
    else swiperRef.current.swiper.autoplay.start();
  }
  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>GALLERY</h2>
      <h1 className={styles.title}>갤 러 리</h1>
      <Swiper
        ref={swiperRef}
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
              <Image className={styles.swiperImg} src={src} alt={src + idx} preview={{ onVisibleChange: handlePreivewVisible }} />
            </SwiperSlide>
          </div>
        )}
      </Swiper>

      <div style={{ height: '165px', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Image.PreviewGroup>
          {otherImages
            .map((src, idx) =>
              <Image className={styles.swiperImg} src={src} alt={src + idx} preview={{ onVisibleChange: handlePreivewVisible }} width={'80px'} height={'80px'} style={{ objectFit: 'cover' }} />
            )}
        </Image.PreviewGroup>

      </div>
    </div>
  </>
}

export default Gallery;
