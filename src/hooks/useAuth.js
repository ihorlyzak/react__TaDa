import { useState } from 'react';
import { auth } from 'Shared/Auth/Firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const useAuth = () => {
  const [loginValues, setLoginValues] = useState({
    username: '',
    password: '',
  });
  const [userCredentials, setUserCredentials] = useState(null);

  const updateLoginValues = e => {
    setLoginValues(inputValues => {
      return {
        ...inputValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const signIn = async e => {
    e.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        loginValues.username,
        loginValues.password,
      );
      setUserCredentials(userCredentials);
    } catch (err) {
      throw new Error(err);
    }
  };

  const signUp = async e => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        loginValues.username,
        loginValues.password,
      );
      setUserCredentials(userCredentials);
    } catch (err) {
      throw new Error(err);
    }
  };

  return { loginValues, userCredentials, updateLoginValues, signIn, signUp };
};
