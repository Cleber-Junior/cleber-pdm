import React, {createContext, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

export const ProjetoContext = createContext({});

export const ProjetoProvider = ({children}) => {
  const [projects, setProjet] = React.useState([]);

  useEffect(() => {
    const listener = firestore()
      .collection('projetos')
      .onSnapshot(snapShot => {
        // console.log(snapShot);
        if (snapShot) {
          let d = [];
          snapShot.forEach(doc => {
            d.push({
              id: doc.id,
              title: doc.data().nome,
              currentvalue: doc.data().valorAtual,
              metavalue: doc.data().valorMeta,
              description: doc.data().desc,
            });
          });
          setProjet(d);
        }
      });
    return () => {
      listener();
    };
  }, []);

  return (
    <ProjetoContext.Provider value={{projects}}>
      {children}
    </ProjetoContext.Provider>
  );
};
