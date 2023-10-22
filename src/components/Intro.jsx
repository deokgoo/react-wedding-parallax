
import styles from '../style/Intro.module.scss';
import Particle from './Particle';

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.decoration}></div>
      <div className={styles.backgroundImg}>
      </div>
      <Particle />
    </div>
  );
}

export default Intro;
