import { useState, useEffect } from 'react';
import { readGuestBookListen, writeGuestBook } from './realtimeDatabase';

const useGuestBook = () => {
  const [guestBook, setGuestBook] = useState([]);

  const parseGuestBook = (fetchData) => {
    return Object.keys(fetchData).map((x) => ({text: `${fetchData[x]?.content} - ${fetchData[x]?.author}`, value: 10}));
  }

  useEffect(() => {
    readGuestBookListen((fetchData) => {
      const parsedData = parseGuestBook(fetchData);
      setGuestBook(parsedData);
    });
  }, []);

  const handleWriteGuestBook = ({ username, content }) => {

    if (username && content && pwd) {
      writeGuestBook({ username, content });
    }
  }

  return {
    guestBook,
    handleWriteGuestBook,
  }
};

export default useGuestBook;