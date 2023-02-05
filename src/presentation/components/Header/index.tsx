import React from 'react';
import { FiMenu } from 'react-icons/fi';

import locales from '@/locales/header';
import Styles from './styles.scss';

const Header: React.FC = () => {
  return (
    <div className={Styles.root}>
      <div className={Styles.logoContainer}>
        <h2 className={Styles.title}>{locales.title.toUpperCase()}</h2>
      </div>
      <FiMenu className={Styles.iconMenu} cursor="pointer" />
    </div>
  );
};

export default Header;
