import React from 'react';

import Header from '@/presentation/components/Header';
import locales from '@/locales/home';

import Styles from './styles.scss';

const Home: React.FC = () => {
  return (
    <div className={Styles.home}>
      <Header />
      <div className={Styles.containerLogo}>
        <h2 className={Styles.title}>{locales.title.toUpperCase()}</h2>
        <div className={Styles.squareContainer}>
          <div className={Styles.square3d40} />
          <div className={Styles.square3d80} />
          <div className={Styles.square0} />
          <div className={Styles.square160} />
        </div>
      </div>
    </div>
  );
};

export default Home;
