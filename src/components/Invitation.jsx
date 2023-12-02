import { useState } from 'react';
import { Button, Modal, List, Skeleton, Avatar } from 'antd';
import { PhoneOutlined, MessageOutlined } from '@ant-design/icons';

import styles from '../style/Invitation.module.scss';

const data = [
  {
    relation: '신부',
    name: '최지선',
    phoneNumber: '010-7300-7029',
    color: '#CE8383',
    img: '/images/selfi/selfi-js.png',
  },
  {
    relation: '신랑',
    name: '김덕구',
    phoneNumber: '010-3076-5697',
    color: '#668EAA',
    img: '/images/selfi/selfi-d9.jpeg',
  },
  {
    relation: '신부 아버지',
    name: '최화묵',
    phoneNumber: '010-3409-7029',
    color: '#CE8383',
  },
  {
    relation: '신부 어머니',
    name: '유소영',
    phoneNumber: '010-7409-7029',
    color: '#CE8383',
    img: ''
  },
  {
    relation: '신랑 아버지',
    name: '김준일',
    phoneNumber: '010-3924-5697',
    color: '#668EAA',
  },
  {
    relation: '신랑 어머니',
    name: '홍상희',
    phoneNumber: '010-2666-5697',
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
      <img src="/images/seo_jsd.JPG" alt="wedding" style={{ height: '25vh', width: '100%', objectFit: 'cover' }} />
      <hr />
      <p className={styles.parent}>
        <span className={styles.name}>김준일</span> • <span className={styles.name}>홍상희</span> 의 장남 <span className={styles.name}>덕구</span><br />
        <span className={styles.name}>최화묵</span> • <span className={styles.name}>유소영</span> 의 장녀 <span className={styles.name}>지선</span><br />
      </p>
      <Button icon={<PhoneOutlined />} primarycolor={'#D1C8C8'} onClick={() => setIsModalOpen(true)}>
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
                  avatar={<Avatar src={item.img} />}
                  title={<>{item.name}</>}
                  description={<div style={{ color: item.color }}>{item.relation}</div>}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Modal>
      <hr />
    </div >
  </>
}

export default Invitation;
