import React, { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

import Styles from './styles.scss';

interface Props
  extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > {
  children?: ReactNode;
  IconView?: IconType;
}

const Input: React.FC<Props> = ({ children, IconView, ...props }) => {
  return (
    <div className={Styles.inputWrapper}>
      <IconView className={Styles.iconLeft} />
      <input className={Styles.input} {...props} />
      {children}
    </div>
  );
};

export default Input;
