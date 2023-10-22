import { useEffect, useRef } from 'react';
import styles from '../style/Gallary.module.scss';

const Gallary = () => {
  const colRef1 = useRef(null);
  const colRef2 = useRef(null);

  useEffect(() => {
    if (!colRef1.current) return;
    if (!colRef2.current) return;

    const addAnimation = () => {
      colRef1.current.classList.add('touchHold');
      colRef2.current.classList.add('touchHold');
    }

    const removeAnimation = () => {
      colRef1.current.classList.remove('touchHold');
      colRef2.current.classList.remove('touchHold');
    }

    const bindEvent = (el) => {
      el.addEventListener('mousedown', addAnimation);
      el.addEventListener('mouseup', addAnimation);
      el.addEventListener('mousemove', addAnimation);

      el.addEventListener('touchstart', addAnimation);
      el.addEventListener('touchend', removeAnimation);
      el.addEventListener('touchmove', addAnimation);
    }

    bindEvent(colRef1.current);
    bindEvent(colRef2.current);

    return () => {
      colRef1.current.removeEventListener('mousedown', addAnimation);
      colRef1.current.removeEventListener('mouseup', addAnimation);
      colRef1.current.removeEventListener('mousemove', addAnimation);

      colRef1.current.removeEventListener('touchstart', addAnimation);
      colRef1.current.removeEventListener('touchend', removeAnimation);
      colRef1.current.removeEventListener('touchmove', addAnimation);

      colRef2.current.removeEventListener('mousedown', addAnimation);
      colRef2.current.removeEventListener('mouseup', addAnimation);
      colRef2.current.removeEventListener('mousemove', addAnimation);

      colRef2.current.removeEventListener('touchstart', addAnimation);
      colRef2.current.removeEventListener('touchend', removeAnimation);
      colRef2.current.removeEventListener('touchmove', addAnimation);
    }
  })

  return <>
    <div className={styles.container}>
      <h1 className={styles.title}>갤 러 리</h1>
      <div className={styles.imageContainer}>
        <div className={styles.col1} ref={colRef1}>
          <img src="/images/jeju/1.JPG" alt="jeju1" />
          <img src="/images/jeju/2.JPG" alt="jeju2" />
          <img src="/images/jeju/3.JPG" alt="jeju3" />
          <img src="/images/jeju/4.JPG" alt="jeju4" />
          <img src="/images/jeju/5.JPG" alt="jeju5" />
          <img src="/images/jeju/1.JPG" alt="jeju1" />
          <img src="/images/jeju/2.JPG" alt="jeju2" />
          <img src="/images/jeju/3.JPG" alt="jeju3" />
          <img src="/images/jeju/4.JPG" alt="jeju4" />
          <img src="/images/jeju/5.JPG" alt="jeju5" />
        </div>
        <div className={styles.col2} ref={colRef2}>
          <img src="/images/jeju/3.JPG" alt="jeju3" />
          <img src="/images/jeju/4.JPG" alt="jeju4" />
          <img src="/images/jeju/5.JPG" alt="jeju5" />
          <img src="/images/jeju/1.JPG" alt="jeju1" />
          <img src="/images/jeju/2.JPG" alt="jeju2" />
          <img src="/images/jeju/3.JPG" alt="jeju3" />
          <img src="/images/jeju/4.JPG" alt="jeju4" />
          <img src="/images/jeju/5.JPG" alt="jeju5" />
          <img src="/images/jeju/1.JPG" alt="jeju1" />
          <img src="/images/jeju/2.JPG" alt="jeju2" />
        </div>
      </div>

    </div>
  </>
}

export default Gallary;
