import { useState, memo, useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { UserOutlined, LoadingOutlined, SendOutlined } from '@ant-design/icons';
import { Spin, Input, Space, Button } from 'antd';

import useGuestBook from '../util/firebase/useGuestBook';

import styles from '../style/GuestBook.module.scss';

const WorldCloud = memo(({ words }) => {
  return <ReactWordcloud words={words ?? []} options={{
    randomSeed: new Date().getTime(),
    rotations: 0,
    transitionDuration: 500,
    fontSizes: [16, 22],
  }} />
});


const GuestBook = () => {
  const [formData, setFormData] = useState({ username: '', content: '' });
  const { guestBook, setGuestBook, handleWriteGuestBook } = useGuestBook();


  const registerGuestBookHandler = () => {
    const { username, content } = formData;

    handleWriteGuestBook({
      username,
      content,
    });

    // input 을 비워준다.
    setFormData({ username: '', content: '' });
  }

  const handleAuthorChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
  }

  const handleContentChange = (e) => {
    setFormData({ ...formData, content: e.target.value });
  }

  useEffect(() => {
    setInterval(() => {
      setGuestBook((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            value: item.value + Math.floor(Math.random() * 10),
          }
        })
      })
    }, 3000)
  }, [])

  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>GUEST BOOK</h2>
      <h1 className={styles.title}>방명록</h1>
      <div className={styles.wordContainer}>
        <div className={styles.live}><Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /></div>
        <WorldCloud words={guestBook} />
      </div>
      <Space.Compact style={{ marginTop: '30px' }}>
        <Input style={{ width: '25%' }} placeholder="글쓴이" prefix={<UserOutlined />} onChange={handleAuthorChange} value={formData.username} />
        <Input style={{ width: '70%' }} count={{ show: true, max: 20 }} placeholder="방명록을 남겨주세요." onChange={handleContentChange} value={formData.content} />
        <Button type="primary" shape="circle" icon={<SendOutlined />} onClick={registerGuestBookHandler} />
      </Space.Compact>


    </div>
  </>
}

export default GuestBook;
