import React from 'react';
import {
  FaRegArrowAltCircleLeft,
  FaUserLock,
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';

import locales from '@/locales/login';

import Styles from './styles.scss';
import useLogin from './useLogin';
import Input from './components/Input';
import routesName from '@/main/routes/routesName';

const Login: React.FC = () => {
  const { isEye, handleEye } = useLogin();
  return (
    <div className={Styles.login}>
      <div className={Styles.loginContainer}>
        <form className={Styles.form}>
          <a className={Styles.linkBack} href={routesName.Home}>
            <FaRegArrowAltCircleLeft className={Styles.iconBack} />
            <h4 className={Styles.textBack}>{locales.back}</h4>
          </a>

          <div className={Styles.loginWrapper}>
            <div className={Styles.titleWrapper}>
              <FaUserLock className={Styles.iconTitle} />
              <h2 className={Styles.title}>{locales.login}</h2>
            </div>

            <div className={Styles.inputContainer}>
              <Input type="email" placeholder="E-mail" IconView={FaUser} />
              <Input type={isEye ? 'password' : 'text'} placeholder="Password" IconView={FaLock}>
                {isEye ? (
                  <FaEye className={Styles.eye} onClick={handleEye} />
                ) : (
                  <FaEyeSlash className={Styles.eye} onClick={handleEye} />
                )}
              </Input>
              <a className={Styles.forgotPassword}>{locales.forgotPassword}</a>
            </div>

            <button className={Styles.submit}>
              {locales.signIn.toUpperCase()}
            </button>
            <a className={Styles.linkRegister}>
              {locales.register.toUpperCase()}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
