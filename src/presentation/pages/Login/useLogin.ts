import { useState } from 'react';

interface LoginHooks {
  isEye: boolean;
  handleEye: () => void;
}

const useLogin = (): LoginHooks => {
  const [isEye, setIsEye] = useState<boolean>(true);

  const handleEye = (): void => { setIsEye(!isEye); };

  return {
    isEye,
    handleEye
  };
};

export default useLogin;
