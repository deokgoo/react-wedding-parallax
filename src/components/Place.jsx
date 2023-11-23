import { CarOutlined } from '@ant-design/icons';

import styles from '../style/Place.module.scss';

const Place = () => {

  return <>
    <div className={styles.container}>
      <h2 className={styles.subTitle}>Location</h2>
      <h1 className={styles.title}>오시는길</h1>

      <h3 className={styles.place}>해군호텔W웨딩홀 노블레스홀</h3>
      <p className={styles.subPlace}>서울시 영등포구 가마산로 538 (신길동 2001-4)</p>
      <div className={styles.map}></div>
      <div className={styles.infoContainer}>
        <div className={styles.item}>
          <div className={styles.iconWrapper}>
            <div className={styles.icon}><CarOutlined color='red' /></div>
          </div>
          <p className={styles.content}>무료 셔틀버스 운행</p>
        </div>

      </div>
    </div>
  </>
}

export default Place;
