import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useRoutesPaths } from 'routes';
import { auth } from 'services';

export const useAuth = () => {
  const navigate = useNavigate();
  const { routes } = useRoutesPaths();

  const [loginValues, setLoginValues] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const updateLoginValues = e => {
    setLoginValues(inputValues => {
      return {
        ...inputValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const signUp = async e => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        loginValues.username,
        loginValues.password,
      );
      navigate(routes.mainPage());
    } catch (err) {
      setError(err);
      throw new Error(err);
    }
  };

  const signIn = async e => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        loginValues.username,
        loginValues.password,
      );
      navigate(routes.mainPage());
    } catch (err) {
      setError(err);
      throw new Error(err);
    }
  };

  return {
    loginValues,
    error,
    updateLoginValues,
    signIn,
    signUp,
  };
};
