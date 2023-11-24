import React, { useEffect } from 'react';
import { message } from 'antd';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Intro from '../components/Intro';
import IntroContent from '../components/IntroContent';
import Invitation from '../components/Invitation';
import Gallery from '../components/Gallery';
import GuestBook from '../components/GuestBook';
import Place from '../components/Place';

import styles from '../style/WeddingMain.module.scss';
import ContactModal from '../components/ContactModal';
import Schedule from '../components/Schedule';
import BackgroundLayer from '../components/BackgroundLayer';

const WeddingMain = () => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    messageApi.open({
      type: 'info',
      content: '현재 개발중입니다 by d9',
      duration: 3,
    });
  }, [messageApi])

  return (
    <main>
      {contextHolder}
      <Parallax className={styles.main} pages={6.3}>
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
          offset={0}
          factor={1}
        >
          <Intro />
        </ParallaxLayer>

        {/* STG2*/}
        <ParallaxLayer
          offset={1}>
          <BackgroundLayer color="pink" />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.1}>
          <Invitation />
          <ContactModal isOpen={false} />
        </ParallaxLayer>

        {/* STG3*/}
        <ParallaxLayer
          offset={2}>
          <BackgroundLayer />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.1}>
          <Gallery />
        </ParallaxLayer>

        {/* STG4*/}
        <ParallaxLayer
          offset={3}>
          <BackgroundLayer color="pink" />
        </ParallaxLayer>
        <ParallaxLayer offset={3} factor={1} speed={0.1}>
          <Schedule />
        </ParallaxLayer>

        {/* STG5*/}
        <ParallaxLayer
          offset={4}
          factor={1.3}
        >
          <BackgroundLayer style={{ height: '150vh' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4} factor={1.3} speed={0.1}>
          <Place />
        </ParallaxLayer>

        {/* STG6*/}
        <ParallaxLayer
          offset={5.3}
          factor={1}
        >
          <BackgroundLayer color="pink" />
        </ParallaxLayer>
        <ParallaxLayer offset={5.3} speed={0.1} factor={1}>
          <GuestBook />
        </ParallaxLayer>
      </Parallax>
    </main >
  );
};

export default WeddingMain;
