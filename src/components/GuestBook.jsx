import styles from '../style/GuestBook.module.scss';

const GuestBook = () => {
  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>GUEST BOOK</h2>
      <h1 className={styles.title}>방명록</h1>
    </div>
  </>
}

export default GuestBook;
