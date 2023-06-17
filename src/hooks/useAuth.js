import { useEffect, useState } from 'react';
import { auth } from 'firebaseAuth/firebase';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useRoutesPaths } from 'Routes';

export const useAuth = () => {
  const navigate = useNavigate();
  const { routes } = useRoutesPaths();

  const [loginValues, setLoginValues] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
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

  const signUp = async e => {
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

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user =>
      user ? setUserCredentials(user) : setUserCredentials(null),
    );

    return () => unsub();
  }, []);

  return { loginValues, error, userCredentials, updateLoginValues, signIn, signUp };
};
