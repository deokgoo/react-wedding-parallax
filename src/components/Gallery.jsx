import { useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Image } from 'antd';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import styles from '../style/Gallary.module.scss';

// otherImages 에 나온 이미지는 제외 합니다.
const images = [
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist1.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist2.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist3.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist4.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist5.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist6.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist7.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist8.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist9.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist10.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist11.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist12.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist13.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist15.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist16.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist17.JPEG?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist18.JPEG?alt=media',
].sort(() => Math.random() - 0.5);

const Gallery = () => {
  const swiperRef = useRef(null);
  const previewImages = images.slice(0, 8);
  const otherImages = images.filter(img => !previewImages.includes(img));
  otherImages.push(
    'https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Flist14.JPEG?alt=media',
  )

  const handlePreivewVisible = (visible) => {
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
        // autoplay={{
        //   delay: 2000,
        //   pauseOnMouseEnter: true,
        //   disableOnInteraction: false,
        // }}
        initialSlide={1}
        loop={true}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {/* 이미지를 셔플해서 노출 합니다. */}
        {otherImages.map((src, idx) =>
          <div className={styles.swiperContainer} key={src + idx}>
            <SwiperSlide className={styles.swiperContainer} key={src + idx}>
              <Image className={styles.swiperImg} src={src} alt={src + idx} preview={{ onVisibleChange: handlePreivewVisible }} />
            </SwiperSlide>
          </div>
        )}
      </Swiper>

      <div style={{ height: '165px', width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <Image.PreviewGroup>
          {previewImages
            .map((src, idx) =>
              <Image
                className={styles.previewImg}
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
