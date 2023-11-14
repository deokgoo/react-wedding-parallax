import React, { useState } from 'react';
import { Modal } from 'antd';

const ContactModal = ({ isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const handleOk = () => {
    setIsModalOpen(false);
  }

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk}>
        신부
      </Modal >
    </>
  );
};
export default React.memo(ContactModal);