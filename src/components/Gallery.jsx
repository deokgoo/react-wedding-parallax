import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Image } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import styles from '../style/Gallary.module.scss';

const otherImages = [
  '/images/lists/18.webp',
  '/images/lists/19.webp',
  '/images/lists/20.webp',
  '/images/lists/21.webp',
  '/images/lists/22.webp',
  '/images/lists/23.webp',
  '/images/lists/24.webp',
  '/images/lists/25.webp',
  '/images/lists/26.webp',
  '/images/lists/27.webp',
  '/images/lists/28.webp',
  '/images/lists/29.webp',
  '/images/lists/30.webp',
  '/images/lists/31.webp',
  '/images/lists/32.webp',
  '/images/lists/33.webp',
  '/images/lists/34.webp',
  '/images/lists/35.webp',
  '/images/lists/36.webp',
  '/images/lists/37.webp',
  '/images/lists/38.webp',
  '/images/lists/39.webp',
  '/images/lists/40.webp',
].sort(() => Math.random() - 0.5);

// otherImages 에 나온 이미지는 제외 합니다.
const images = [
  '/images/lists/1.webp',
  '/images/lists/2.webp',
  '/images/lists/3.webp',
  '/images/lists/4.webp',
  '/images/lists/5.webp',
  '/images/lists/6.webp',
  '/images/lists/7.webp',
  '/images/lists/8.webp',
  '/images/lists/9.webp',
  '/images/lists/10.webp',
  '/images/lists/11.webp',
  '/images/lists/12.webp',
  '/images/lists/13.webp',
  '/images/lists/14.webp',
  '/images/lists/15.webp',
  '/images/lists/16.webp',
  '/images/lists/17.webp',
  '/images/lists/18.webp',
  '/images/lists/19.webp',
  '/images/lists/20.webp',
  '/images/lists/21.webp',
  '/images/lists/22.webp',
  '/images/lists/23.webp',
  '/images/lists/24.webp',
  '/images/lists/25.webp',
  '/images/lists/26.webp',
  '/images/lists/27.webp',
  '/images/lists/28.webp',
  '/images/lists/29.webp',
  '/images/lists/30.webp',
  '/images/lists/31.webp',
  '/images/lists/32.webp',
  '/images/lists/33.webp',
  '/images/lists/34.webp',
  '/images/lists/35.webp',
  '/images/lists/36.webp',
  '/images/lists/37.webp',
  '/images/lists/38.webp',
  '/images/lists/39.webp',
  '/images/lists/40.webp',
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
