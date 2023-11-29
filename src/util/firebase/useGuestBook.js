import { useState, useEffect } from 'react';
import { readGuestBookListen, writeGuestBook } from './realtimeDatabase';

const useGuestBook = () => {
  const [guestBook, setGuestBook] = useState([]);

  const parseGuestBook = (fetchData) => {
    if(!fetchData) return [];

    return Object.keys(fetchData).map((x) => ({text: `${fetchData[x]?.content} -${fetchData[x]?.author}-`, value: 10}));
  }

  const guestBookFetch = () => {
    readGuestBookListen((fetchData) => {
      const parsedData = parseGuestBook(fetchData);
      setGuestBook(parsedData);
    });
  }

  useEffect(() => {
    guestBookFetch();
  }, []);

  const handleWriteGuestBook = async ({ username, content }) => {

    if (username && content) {
      await writeGuestBook({ username, content });
      guestBookFetch();
    }
  }

  return {
    guestBook,
    setGuestBook,
    handleWriteGuestBook,
  }
};

export default useGuestBook;