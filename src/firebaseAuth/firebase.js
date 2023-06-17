import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCd4cpNa-1C5AwCqhezBAUmE_8v13A3W3I',
  authDomain: 'react-tada.firebaseapp.com',
  projectId: 'react-tada',
  storageBucket: 'react-tada.appspot.com',
  messagingSenderId: '350846966867',
  appId: '1:350846966867:web:4d667961c3bfd27c21baa6',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
