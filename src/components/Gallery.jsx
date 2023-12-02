import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Image } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import styles from '../style/Gallary.module.scss';

const otherImages = [
  '/images/lists/18.jpeg',
  '/images/lists/19.jpeg',
  '/images/lists/20.jpeg',
  '/images/lists/21.jpeg',
  '/images/lists/22.jpeg',
  '/images/lists/23.jpeg',
  '/images/lists/24.jpeg',
  '/images/lists/25.jpeg',
  '/images/lists/26.jpeg',
  '/images/lists/27.jpeg',
  '/images/lists/28.jpeg',
  '/images/lists/29.jpeg',
  '/images/lists/30.jpeg',
  '/images/lists/31.jpeg',
  '/images/lists/32.jpeg',
  '/images/lists/33.jpeg',
  '/images/lists/34.jpeg',
  '/images/lists/35.jpeg',
  '/images/lists/36.jpeg',
  '/images/lists/37.jpeg',
  '/images/lists/38.jpeg',
  '/images/lists/39.jpeg',
  '/images/lists/40.jpeg',
].sort(() => Math.random() - 0.5);

// otherImages 에 나온 이미지는 제외 합니다.
const images = [
  '/images/lists/1.JPG',
  '/images/lists/2.JPG',
  '/images/lists/3.JPG',
  '/images/lists/4.JPG',
  '/images/lists/5.JPG',
  '/images/lists/6.JPG',
  '/images/lists/7.JPG',
  '/images/lists/8.JPG',
  '/images/lists/9.JPG',
  '/images/lists/10.JPG',
  '/images/lists/11.JPG',
  '/images/lists/12.JPG',
  '/images/lists/13.JPG',
  '/images/lists/14.JPG',
  '/images/lists/15.JPG',
  '/images/lists/16.JPG',
  '/images/lists/17.JPG',
  '/images/lists/18.jpeg',
  '/images/lists/19.jpeg',
  '/images/lists/20.jpeg',
  '/images/lists/21.jpeg',
  '/images/lists/22.jpeg',
  '/images/lists/23.jpeg',
  '/images/lists/24.jpeg',
  '/images/lists/25.jpeg',
  '/images/lists/26.jpeg',
  '/images/lists/27.jpeg',
  '/images/lists/28.jpeg',
  '/images/lists/29.jpeg',
  '/images/lists/30.jpeg',
  '/images/lists/31.jpeg',
  '/images/lists/32.jpeg',
  '/images/lists/33.jpeg',
  '/images/lists/34.jpeg',
  '/images/lists/35.jpeg',
  '/images/lists/36.jpeg',
  '/images/lists/37.jpeg',
  '/images/lists/38.jpeg',
  '/images/lists/39.jpeg',
  '/images/lists/40.jpeg',
].sort(() => Math.random() - 0.5).filter((src) => !otherImages.includes(src));

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
        {/* 이미지를 셔플해서 노출 합니다. */}
        {images.sort(() => Math.random() - 0.5).map((src, idx) =>
          <div className={styles.swiperContainer} key={src + idx}>
            <SwiperSlide className={styles.swiperContainer} key={src + idx}>
              <Image className={styles.swiperImg} src={src} alt={src + idx} preview={{ onVisibleChange: handlePreivewVisible }} />
            </SwiperSlide>
          </div>
        )}
      </Swiper>

      <div style={{ height: '165px', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Image.PreviewGroup>
          {otherImages.sort(() => Math.random() - 0.5).slice(0, 8)
            .map((src, idx) =>
              <Image
                className={styles.swiperImg}
                src={src}
                alt={src + idx}
                preview={{ onVisibleChange: handlePreivewVisible }}
                width={'80px'}
                height={'80px'}
                style={{ objectFit: 'cover' }}
                key={src + idx}
              />
            )}
        </Image.PreviewGroup>

      </div>
    </div>
  </>
}

export default Gallery;
