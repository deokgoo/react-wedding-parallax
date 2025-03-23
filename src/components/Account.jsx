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
    label: '신부측 고윤미 계좌번호',
    children: <BankAccountItem bankName={"농협"} accountNumber={"3022699014491"} iconPath={"/images/icon/nh-icon.webp"} />,
  },
  {
    key: '2',
    label: '신랑측 김정행 계좌번호',
    children: <BankAccountItem bankName={"국민"} accountNumber={"56050202180495"} iconPath={"/images/icon/kb-icon.webp"} />
  },
  {
    key: '3',
    label: '신부측 아버님 고인지 계좌번호',
    children: <BankAccountItem bankName={"농협"} accountNumber={"25002013364"} iconPath={"/images/icon/nh-icon.webp"} />
  },
  {
    key: '4',
    label: '신부측 어머님 김정아 계좌번호',
    children: <BankAccountItem bankName={"농협"} accountNumber={"25002056380"} iconPath={"/images/icon/nh-icon.webp"} />
  },
  {
    key: '5',
    label: '신랑측 아버님 김태중 계좌번호',
    children: <BankAccountItem bankName={"국민"} accountNumber={"12050204226245"} iconPath={"/images/icon/kb-icon.webp"} />
  },
  {
    key: '6',
    label: '신랑측 어머님 박성미 계좌번호',
    children: <BankAccountItem bankName={"농협"} accountNumber={"3560651263933"} iconPath={"/images/icon/nh-icon.webp"} />,
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