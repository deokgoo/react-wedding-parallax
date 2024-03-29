import { useState } from "react";
import { Button as AntdButton } from 'antd';

const CopyButton = ({ bankName, accountNumber }) => {
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = () => {
    setIsLoading(true);

    navigator.clipboard.writeText(`${bankName} ${accountNumber}`);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <AntdButton type="primary" size="small" loading={isLoading} onClick={copyToClipboard}>계좌복사</AntdButton>
  );
}

export default CopyButton
