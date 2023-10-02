import React from 'react';

import WeddingRing from '../util/lottie/WeddingRing';

import styles from '../style/WeddingMain.module.scss';

const IntroContent = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>김덕구<span>❣️</span>최지선 결혼합니다.</h1>
      </header>
      <h1 className={styles.title}>AT LAST.</h1>
      <h2 className={styles.subTitle}>SAVE THE DATE FOR THE WEDDING OF</h2>
      <h3 className={styles.name}>김덕구 & 최지선</h3>
      <div className={styles.animation}>
        <WeddingRing />
      </div>
      <h2 className={styles.date}>
        2024. 03. 09. SATURDAY. PM 13:30 <br/>
        해군호텔W웨딩홀 노블레스홀
      </h2>
    </>
  )
}

export default IntroContent;
