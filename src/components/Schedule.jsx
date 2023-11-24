import { useEffect, useRef, useState } from 'react';
import { FlipDown } from '../util/flipdown';
import Icon from '@ant-design/icons';

import styles from '../style/Schedule.module.scss';
import '../style/Flipdown.scss';

const DATE_TEXT = {
  date: "9",
  day: "Saturday",
  month: "March",
  year: "2024"
}

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const HeartIcon = (props) => (
  <Icon component={HeartSvg} {...props} />
);

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

  const countDownComment = () => {
    // 몇 일 남았는지 계산합니다. 
    const now = new Date();
    const eventDate = new Date('2024-03-09T00:00:00');
    const diff = eventDate.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days;
  }

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
      <div className={styles.countDownWrapper}>
        덕구 <HeartIcon style={{ color: 'hotpink' }} /> 지선의 결혼식이
        <span className={styles.strength}>{countDownComment()}</span>일 남았습니다.
      </div>

    </div>
  )
};
export default Schedule;