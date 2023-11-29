import ReactWordcloud from 'react-wordcloud';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Input, Typography, Space, Button } from 'antd';

import useGuestBook from '../util/firebase/useGuestBook';

import styles from '../style/GuestBook.module.scss';

const GuestBook = () => {
  const { guestBook, handleWriteGuestBook } = useGuestBook();


  const registerGuestBookHandler = () => {
    handleWriteGuestBook({
      username: 'd9',
      content: '테스트를 진행합니다. ',
    });
  }

  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>GUEST BOOK</h2>
      <h1 className={styles.title}>방명록</h1>
      <div className={styles.wordContainer}>
        <div className={styles.live}><Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /></div>
        <ReactWordcloud words={guestBook} options={{
          randomSeed: new Date().getTime(),
          rotations: 0,
          transitionDuration: 500,
          fontSizes: [16, 22],
        }} />
      </div>
      <Typography.Title level={5}>Exceed Max</Typography.Title>
      <Space direction="horizontal">
        <Input
          count={{
            show: true,
            max: 10,
          }}
          defaultValue="Hello, antd!"
        />
        <Button style={{ width: 80 }} onClick={registerGuestBookHandler}>
          save
        </Button>
      </Space>
    </div>
  </>
}

export default GuestBook;
