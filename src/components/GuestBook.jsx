import ReactWordcloud from 'react-wordcloud';
import { UserOutlined, LoadingOutlined } from '@ant-design/icons';
import { Spin, Input, Typography, Space, Button } from 'antd';

import useGuestBook from '../util/firebase/useGuestBook';

import styles from '../style/GuestBook.module.scss';
import { useRef } from 'react';

const GuestBook = () => {
  const formAuthorRef = useRef();
  const formContentRef = useRef();
  const { guestBook, handleWriteGuestBook } = useGuestBook();


  const registerGuestBookHandler = () => {
    const username = formAuthorRef.current?.input?.value;
    const content = formContentRef.current?.input?.value;

    handleWriteGuestBook({
      username,
      content,
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
        <Input placeholder="글쓴이" prefix={<UserOutlined />} ref={formAuthorRef} />
        <Input
          count={{
            show: true,
            max: 10,
          }}
          placeholder="방명록을 남겨주세요."
          ref={formContentRef}
        />
        <Button style={{ width: 80 }} onClick={registerGuestBookHandler}>
          기록
        </Button>
      </Space>
    </div>
  </>
}

export default GuestBook;
