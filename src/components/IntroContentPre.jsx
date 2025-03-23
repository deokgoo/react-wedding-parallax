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
        피로연 4월 26일 AM 09:00 ~ PM 18:00<br />
        <span style={{ color: '#006400', position: 'relative', top: '10px' }}>
          토평동다목적회관 <br/>
        </span> 
        <span style={{ color: '#7C7C7C', position: 'relative', top: '10px' }}>
          (제주 서귀포시 토평로50번길 4)
        </span> 
        
      </h2>
    </>
  )
}

export default IntroContent;
