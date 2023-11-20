import { useEffect, useRef, useState } from 'react';
import styles from '../style/Schedule.module.scss';

const Schedule = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const themeRef = useRef(null);
  const [dateText, setDateText] = useState({
    date: "",
    day: "",
    month: "",
    year: ""
  })
  const [twoHeight, setTwoHeight] = useState(0);
  const [boxColor, setBoxColor] = useState(null);

  useEffect(() => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const box = document.getElementById("box");
    const theme = document.getElementById("box");

    function update() {
      let now = new Date('2024.03.09');
      setDateText({
        date: now.getDate(),
        day: days[now.getDay()],
        month: months[now.getMonth()],
        year: now.getFullYear()

      })
    }

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInterval(update, 1000);
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
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
      <h2 className={styles.subTitle}>SCHEDULE</h2>
      <h1 className={styles.title}>일정</h1>
      <div className={styles.theme} ref={themeRef}>
        <input type="checkbox" className={styles.check} checked />
        <i class="fa-solid fa-circle-half-stroke"></i>
      </div>
      <div className={styles.box} ref={boxRef} style={{ color: boxColor }}>
        <div>
          <div className={styles.month}>{dateText.month}</div>
        </div>
        <div className={styles.two} style={{ height: twoHeight }}>
          <div className={styles.day}>{dateText.day}</div>
          <div className={styles.date}>{dateText.date}</div>
          <div className={styles.year}>{dateText.year}</div>
        </div>
      </div>
    </div >
  )
};
export default Schedule;