import { useState } from 'react';
import { Button, Modal, List, Skeleton, Avatar } from 'antd';
import { PhoneOutlined, MessageOutlined } from '@ant-design/icons';

import styles from '../style/Invitation.module.scss';

const data = [
  {
    relation: '신부',
    name: '고윤미',
    phoneNumber: '010-3215-0144',
    color: '#CE8383',
  },
  {
    relation: '신랑',
    name: '김정행',
    phoneNumber: '010-8631-5698',
    color: '#668EAA',
  },
  {
    relation: '신부 아버지',
    name: '고인지',
    phoneNumber: '010-3692-0144',
    color: '#CE8383',
  },
  {
    relation: '신부 어머니',
    name: '김정아',
    phoneNumber: '010-3696-0144',
    color: '#CE8383',
    img: ''
  },
  {
    relation: '신랑 아버지',
    name: '김태중',
    phoneNumber: '010-3833-3337',
    color: '#668EAA',
  },
  {
    relation: '신랑 어머니',
    name: '박성미',
    phoneNumber: '010-4556-5698',
    color: '#668EAA',
  }
]

const Invitation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalStyles = {
    header: {
      textAlign: 'center',
      borderRadius: 0,
      paddingInlineStart: 5,
    },
    body: {
      borderRadius: 5,
    },
    mask: {
      backdropFilter: 'blur(10px)',
    },
    footer: {
      borderTop: '1px solid #333',
    },
    content: {
      boxShadow: '0 0 30px #999',
    },
  };

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
      <img src="https://firebasestorage.googleapis.com/v0/b/wedding-e82c2.appspot.com/o/jh%2Fmain-2.JPEG?alt=media" alt="wedding" style={{ height: '25vh', width: '100%', objectFit: 'cover' }} />
      <hr />
      <p className={styles.parent}>
        <span className={styles.name}>김태중</span> • <span className={styles.name}>박성미</span> 의 아들 <span className={styles.name}>김정행</span><br />
        <span className={styles.name}>고인지</span> • <span className={styles.name}>김정아</span> 의 딸 <span className={styles.name}>고윤미</span><br />
      </p>
      <Button icon={<PhoneOutlined />} primarycolor={'#D1C8C8'} onClick={() => setIsModalOpen(true)} style={{ backgroundColor: '#f8dede', border: '1px solid white' }}>
        연락번호 확인
      </Button>
      <Modal styles={modalStyles} title="연락처" open={isModalOpen} footer={null} closeIcon={null} onCancel={() => setIsModalOpen(false)}>
        <List
          className="list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              actions={[<a href={`tel:${item.phoneNumber}`} type='tel'><PhoneOutlined color={item.color} /></a>, <a href={`sms:${item.phoneNumber}`}><MessageOutlined /></a>]}
            >
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  title={<>{item.name}</>}
                  description={<div style={{ color: item.color }}>{item.relation}</div>}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Modal>
    </div >
  </>
}

export default Invitation;
