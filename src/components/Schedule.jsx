import { useEffect, useRef, useState } from 'react';
import { FlipDown } from '../util/flipdown';

import styles from '../style/Schedule.module.scss';
import '../style/Flipdown.scss';

const DATE_TEXT = {
  date: "9",
  day: "Saturday",
  month: "March",
  year: "2024"
}

const Schedule = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const themeRef = useRef(null);
  const [twoHeight, setTwoHeight] = useState(0);
  const [boxColor, setBoxColor] = useState(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setTwoHeight(216);
            setBoxColor("grey");
          }, 500);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    var twoDaysFromNow = (new Date('2024-03-09T00:00:00').getTime()) / 1000;
    const flipdown = new FlipDown(twoDaysFromNow)

    flipdown.start();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <h2 className={styles.subTitle}>DATE</h2>
      <h1 className={styles.title}>일시</h1>
      <div className={styles.theme} ref={themeRef}>
        <input type="checkbox" className={styles.check} checked={true} readOnly={true} />
        <i className="fa-solid fa-circle-half-stroke"></i>
      </div>
      <div className={styles.box} ref={boxRef} style={{ color: boxColor }}>
        <div>
          <div className={styles.month}>{DATE_TEXT.month}</div>
        </div>
        <div className={styles.two} style={{ height: twoHeight }}>
          <div className={styles.day}>{DATE_TEXT.day}</div>
          <div className={styles.date}>{DATE_TEXT.date}</div>
          <div className={styles.year}>{DATE_TEXT.year}</div>
        </div>
      </div>
      <div className={styles.flipdownWrapper}>
        <div id="flipdown" className="flipdown"></div>
      </div>
    </div >
  )
};
export default Schedule;