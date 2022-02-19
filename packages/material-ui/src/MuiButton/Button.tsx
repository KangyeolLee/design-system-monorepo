import * as React from 'react';
import Button from '@mui/material/Button';
import { FC } from 'react';

type Props = {
  variant: 'text' | 'contained' | 'outlined';
  buttonText?: string;
};
const MuiButton: FC<Props> = ({ variant, buttonText }) => {
  return <Button variant={variant}>{buttonText}</Button>;
};

export default MuiButton;
