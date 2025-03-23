import React from 'react';

import WeddingRing from '../util/lottie/WeddingRing';

import styles from '../style/WeddingMain.module.scss';

const IntroContent = () => {
  return (
    <>
      <h1 className={styles.title}>AT LAST.</h1>
      <h2 className={styles.subTitle}>SAVE THE DATE FOR THE WEDDING OF</h2>
      <h3 className={styles.name}>김정행 <span>그리고</span> 고윤미</h3>
      <div className={styles.animation}>
        <WeddingRing />
      </div>
      <h2 className={styles.date}>
        2025. 05. 10. SATURDAY PM 01:30 <br />
        <span style={{ color: '#006400', position: 'relative', top: '10px' }}>
          마벨리에 시흥점 <br/>
        </span> 
        <span style={{ color: '#7C7C7C', position: 'relative', top: '10px' }}>
          (서울시 금천구 시흥대로 201 홈플러스 시흥점 7층)
        </span> 
        
      </h2>
    </>
  )
}

export default IntroContent;
