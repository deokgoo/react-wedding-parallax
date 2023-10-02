import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Intro from '../components/Intro';
import IntroContent from '../components/IntroContent';
import Invitation from '../components/Invitation';
import Invitation2 from '../components/Invitation2';
import Notification from '../components/Notification';
import Place from '../components/Place';

import styles from '../style/WeddingMain.module.scss';

const WeddingMain = () => {
  return (
    <main>
      <Parallax className={styles.main} pages={5}>
        {/* STG1*/}
        <ParallaxLayer
          className={styles.stg1}
          offset={0}
          factor={1}
          speed={0.5}
        >
          <IntroContent />
        </ParallaxLayer>
        <ParallaxLayer
          className={styles.intro}
          offset={0}
          style={{backgroundSize: 'cover'}}
          factor={1}>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          factor={1}
        >
          <Intro />
        </ParallaxLayer>

        {/* STG2*/}
        <ParallaxLayer
          className={styles.intro}
          offset={1}
          style={{backgroundSize: 'cover'}}
          factor={1}>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} factor={1}>
          <Invitation />
        </ParallaxLayer>

        {/* STG3*/}
        <ParallaxLayer
          className={styles.intro}
          offset={2}
          style={{backgroundSize: 'cover'}}
          factor={1}>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={1}>
          <Invitation2 />
        </ParallaxLayer>

        {/* STG4*/}
        <ParallaxLayer
          className={styles.intro}
          offset={3}
          style={{backgroundSize: 'cover'}}
          factor={1}>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} factor={1}>
          <Notification/>
        </ParallaxLayer>

        {/* STG5*/}
        <ParallaxLayer
          className={styles.intro}
          offset={4}
          style={{backgroundSize: 'cover'}}
          factor={1}>
        </ParallaxLayer>
        <ParallaxLayer offset={4} speed={1} factor={1}>
          <Place/>
        </ParallaxLayer>
      </Parallax>
    </main>
  );
};

export default WeddingMain;
