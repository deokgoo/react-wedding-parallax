import { useState, memo, useEffect, useRef } from 'react';
import ReactWordcloud from 'react-wordcloud';
import { UserOutlined, LoadingOutlined, SendOutlined } from '@ant-design/icons';
import { Spin, Input, Space, Button, Popconfirm } from 'antd';

import useGuestBook from '../util/firebase/useGuestBook';

import styles from '../style/GuestBook.module.scss';

const WorldCloud = memo(({ words }) => {
  return <ReactWordcloud
    words={words ?? []}
    options={{
      randomSeed: new Date().getTime(),
      rotations: 0,
      transitionDuration: 500,
      fontSizes: [16, 22],
      fontFamily: 'CroissantOne, serif',
    }}
  />
});


const GuestBook = () => {
  const [formData, setFormData] = useState({ username: '', content: '' });
  const { guestBook, setGuestBook, handleWriteGuestBook } = useGuestBook();
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setInterval(() => {
      setGuestBook((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            value: Math.floor(Math.random() * 10) % 2 === 0 ? 1 : 10,
          }
        })
      })
    }, 3000)
  }, [setGuestBook]);

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

  const handleCancel = () => {
    setOpen(false);
  }

  const handleEnterKey = (e) => {
    if (!inputRef.current) return;

    const isInputFocused = e.target === inputRef.current || e.target === inputRef.current.input;
    const isEnterKey = e.keyCode === 13;

    setOpen(false);

    if (isEnterKey) {
      if (!isInputFocused) {
        inputRef.current.focus();
      } else {
        inputRef.current.blur();
        setOpen(true);
      }
    }
  }

  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>GUEST BOOK</h2>
      <h1 className={styles.title}>방명록</h1>
      <div className={styles.wordContainer}>
        <div className={styles.live}><Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} /></div>
        <WorldCloud words={guestBook} />
      </div>
      <Space.Compact style={{ marginTop: '30px' }}>
        <Input style={{ width: '25%' }} placeholder="글쓴이" prefix={<UserOutlined />} onChange={handleAuthorChange} onKeyDown={handleEnterKey} value={formData.username} />
        <Input ref={inputRef} style={{ width: '70%' }} count={{ show: true, max: 20 }} placeholder="방명록을 남겨주세요." onChange={handleContentChange} onKeyDown={handleEnterKey} value={formData.content} />
        <Popconfirm
          title="확인해주세요"
          description="삭제 기능이 없어 신중하게 작성해주세요"
          open={open}
          onConfirm={registerGuestBookHandler}
          onCancel={handleCancel}
          okText="기록"
          cancelText="취소"
          style={{ width: '30%' }}
        >
          <Button type="primary" shape="circle" icon={<SendOutlined />} onClick={() => setOpen(true)} />
        </Popconfirm>
      </Space.Compact>
    </div>
  </>
}

export default GuestBook;
