import { PhoneOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import styles from '../style/Invitation.module.scss';

const Invitation = () => {
  return <>
    <div className={styles.container} >
      <h2 className={styles.subTitle}>INVITATION</h2>
      <h1 className={styles.title}>초대합니다</h1>
      <p className={styles.text}>
        어제의 나와 내가 우리가 되어<br />
        저희 두 사람 이제 같은 길을 걷고자 합니다. <br />
        저희가 내딛는 첫 걸음에 부디 오셔서 <br />
        따뜻한 사랑으로 축복해 주십시오.
      </p>
      <img src="/images/seo_jsd.JPG" alt="wedding" style={{ height: '25vh', width: '100%', objectFit: 'cover' }} />
      <hr />
      <p className={styles.parent}>
        <span className={styles.name}>김준일</span> • <span className={styles.name}>홍상희</span> 의 장남 <span className={styles.name}>덕구</span><br />
        <span className={styles.name}>최화묵</span> • <span className={styles.name}>유소영</span> 의 장녀 <span className={styles.name}>지선</span><br />
      </p>
      <Button icon={<PhoneOutlined />} primarycolor={'#D1C8C8'}>
        연락번호 확인
      </Button>
      <hr />
    </div >
  </>
}

export default Invitation;
