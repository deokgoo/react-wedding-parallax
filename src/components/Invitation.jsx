import styles from '../style/Invitation.module.scss';

const Invitation = () => {
  return <>
    <div className={styles.container}>
      <p className={styles.text}>
        어제의 나와 내가 우리가 되어<br/>
        저희 두 사람 이제 같은 길을 걷고자 합니다. <br/>
        저희가 내딛는 첫 걸음에 부디 오셔서 <br/>
        따뜻한 사랑으로 축복해 주십시오.
      </p>
      <hr/>
      <p className={styles.parent}>
        <span className={styles.name}>김준일</span> • <span className={styles.name}>홍상희</span> 의 장남 <span className={styles.name}>덕구</span><br/>
        <span className={styles.name}>최화묵</span> • <span className={styles.name}>유소영</span> 의 장녀 <span className={styles.name}>지선</span><br/>
      </p>
      <hr/>
      <p className={styles.place}>
        2024년 3월 9일 토요일 오후 1시 30분 <br/>
        해군호텔W웨딩홀 노블레스홀 <br/>
      </p>
    </div>
  </>
}

export default Invitation;
