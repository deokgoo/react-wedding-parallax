import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Intro from '../components/Intro';
import IntroContentPre from '../components/IntroContentPre';
import Invitation from '../components/Invitation';
import Gallery from '../components/Gallery';
import GuestBook from '../components/GuestBook';
import PlacePre from '../components/PlacePre';

import styles from '../style/WeddingMain.module.scss';
import ContactModal from '../components/ContactModal';
import BackgroundLayer from '../components/BackgroundLayer';
import Account from '../components/Account';
import SchedulePre from '../components/SchedulePre';
const WeddingMain = () => {
  return (
    <main>
      <Parallax className={styles.main} pages={7.3}>
        {/* STG1*/}
        <ParallaxLayer
          className={styles.stg1}
          offset={0}
          factor={1}
          speed={0.5}
        >
          <IntroContentPre />
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
          <SchedulePre />
        </ParallaxLayer>

        {/* STG5*/}
        <ParallaxLayer
          offset={4}
          factor={1.3}
        >
          <BackgroundLayer style={{ height: '150vh' }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4} factor={1.3} speed={0.1}>
          <PlacePre />
        </ParallaxLayer>

        {/* STG6*/}
        <ParallaxLayer
          offset={5.3}
          factor={1}
        >
          <BackgroundLayer color="pink" />
        </ParallaxLayer>
        <ParallaxLayer offset={5.3} speed={0.1} factor={1}>
          <Account />
        </ParallaxLayer>

        {/* STG7*/}
        <ParallaxLayer
          offset={6.3}
          factor={1}
        >
          <BackgroundLayer />
        </ParallaxLayer>
        <ParallaxLayer offset={6.3} speed={0.1} factor={1}>
          <GuestBook />
        </ParallaxLayer>
      </Parallax>
    </main >
  );
};

export default WeddingMain;
