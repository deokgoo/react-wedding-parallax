import { useState, useEffect } from 'react';
import { readGuestBookListen, writeGuestBook } from './realtimeDatabase';

const useFirebase = () => {
  const [guestBook, setGuestBook] = useState([]);
  const [newPost, setNewPost] = useState({
    username: '',
    uid: '',
    content: '',
    pwd: '',
  });

  useEffect(() => {
    readGuestBookListen(setGuestBook);
  }, []);

  const handleWriteGuestBook = () => {
    const { username, uid, content, pwd } = newPost;

    if (username && uid && content && pwd) {
      writeGuestBook({ username, uid, content, pwd });
    }
  }

  const handleChangeNewPost = (e) => {
    const { name, value } = e.target;

    setNewPost({
      ...newPost,
      [name]: value,
    });
  }

  return {
    guestBook,
    handleWriteGuestBook,
    handleChangeNewPost,
  }
};

export default useFirebase;