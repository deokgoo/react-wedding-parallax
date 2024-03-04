import { Collapse, Avatar } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

import styles from '../style/Account.module.scss';
import CopyButton from './CopyButton';

const BankAccountItem = ({ bankName, accountNumber, iconPath }) => {
  return <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      <Avatar src={iconPath} size={25} />
      <span style={{ fontSize: '10px' }}>{accountNumber} {bankName}</span>
    </div>
    <CopyButton bankName={bankName} accountNumber={accountNumber} />
  </div>;
}

const items = [
  {
    key: '1',
    label: '신부측 최지선 계좌번호',
    children: <BankAccountItem bankName={"카카오뱅크"} accountNumber={"3333212275886"} iconPath={"/images/icon/kakaoBank-icon.webp"} />,
  },
  {
    key: '2',
    label: '신랑측 김덕구 계좌번호',
    children: <BankAccountItem bankName={"카카오뱅크"} accountNumber={"3333223353393"} iconPath={"/images/icon/kakaoBank-icon.webp"} />
  },
  {
    key: '3',
    label: '신부측 아버님 최화묵 계좌번호',
    children: <BankAccountItem bankName={"국민은행"} accountNumber={"699206201164"} iconPath={"/images/icon/kb-icon.webp"} />
  },
  {
    key: '4',
    label: '신부측 어머님 유소영 계좌번호',
    children: <BankAccountItem bankName={"농협"} accountNumber={"54302138361"} iconPath={"/images/icon/nh-icon.webp"} />
  },
  {
    key: '5',
    label: '신랑측 아버님 김준일 계좌번호',
    children: <BankAccountItem bankName={"국민은행"} accountNumber={"57310101045897"} iconPath={"/images/icon/kb-icon.webp"} />
  },
  {
    key: '6',
    label: '신랑측 어머님 홍상희 계좌번호',
    children: <BankAccountItem bankName={"부산은행"} accountNumber={"1122196794402"} iconPath={"/images/icon/bnk-icon.webp"} />,
  },
];

const Account = () => {
  return <div className={styles.container}>
    <div className={styles.subTitle}><HeartTwoTone twoToneColor="#eb2f96" /></div>
    <h1 className={styles.title}>마음 전하실 곳 </h1>
    <div className={styles.collapse}>
      <Collapse items={items} />
    </div>

  </div>
}

export default Account;