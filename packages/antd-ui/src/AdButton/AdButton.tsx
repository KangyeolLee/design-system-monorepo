import { Button } from 'antd';
import { FC } from 'react';

type Props = {
  type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed';
  buttonText: string;
};

const AdButton: FC<Props> = ({ type, buttonText }) => {
  return <Button type={type}>{buttonText}</Button>;
};

export default AdButton;
