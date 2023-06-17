import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from 'firebaseAuth/firebase';

export const AuthDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
      })
      .catch(err => console.log('err', err));
  };

  return (
    <div>
      {user ? (
        <>
          <p>{`Signed in as ${user.email} `}</p>
          <button onClick={userSignOut}>sign out</button>
        </>
      ) : (
        <>Signed out</>
      )}
    </div>
  );
};
