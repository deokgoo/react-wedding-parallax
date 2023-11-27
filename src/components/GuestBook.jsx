import { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import styles from '../style/GuestBook.module.scss';

const GuestBook = () => {
  const [words, setWords] = useState(
    [
      { text: '1 - 결혼 축하해 행복해야해 ~~~', value: 10 },
      { text: '2 - 결혼 축하해 행복해야해 ~~~', value: 10 },
      { text: '3 - 결혼 축하해 행복해야해 ~~~', value: 10 },
      { text: '4 - 결혼 축하해 행복해야해 ~~~', value: 10 },
      { text: '5 - 결혼 축하해 행복해야해 ~~~', value: 10 },
    ]);

  useEffect(() => {
    setInterval(() => {
      setWords(words => {
        // value 랜덤하게 7 ~ 10 사이로 변경
        const newWords = words.map(word => {
          return { ...word, value: Math.floor(Math.random() * 7) + 3 }
        });
        return newWords;
      });
    }, 5000);
  }, []);

  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>GUEST BOOK</h2>
      <h1 className={styles.title}>방명록</h1>
      <div className={styles.wordContainer}>
        <div className={styles.live}><Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /></div>
        <ReactWordcloud words={words} options={{
          randomSeed: new Date().getTime(),
          rotations: 0,
          transitionDuration: 500,
          fontSizes: [16, 22],
        }} />
      </div>
    </div>
  </>
}

export default GuestBook;
