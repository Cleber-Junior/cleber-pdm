import React, {createContext, useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const listener = firestore()
      .collection('users')
      .onSnapshot(snapShot => {
        if (snapShot) {
          let d = [];
          snapShot.forEach(doc => {
            d.push({
              id: doc.id,
              name: doc.data().name,
              sobrenome: doc.data().sobrenome,
              email: doc.data().email,
              cpf: doc.data().cpf,
            });
          });
          setUser(d);
        }
      });
    return () => {
      listener();
    };
  }, []);

  return (
  <UserContext.Provider value={{user}}>
    {children}
  </UserContext.Provider>
  );
};
