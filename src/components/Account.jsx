import { Collapse } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

import styles from '../style/Account.module.scss';

const items = [
  {
    key: '1',
    label: '신부측 계좌번호',
    children: <p>test;;</p>,
  },
  {
    key: '2',
    label: '신랑측 계좌번호',
    children: <p>test;;</p>,
  },
];

const Account = () => {
  return <div className={styles.container}>
    <div className={styles.subTitle}><HeartTwoTone twoToneColor="#eb2f96" /></div>
    <h1 className={styles.title}>마음 전하실 곳 </h1>

    <Collapse items={items} />
  </div>
}

export default Account;