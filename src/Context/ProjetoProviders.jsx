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

  const save = async (id, title, metavalue, description) => {
    try {
      if (id) {
        await firestore().collection('projetos').doc(id).update({
          nome: title,
          valorMeta: metavalue,
          desc: description,
        });
      } else {
        await firestore().collection('projetos').add({
          nome: title,
          valorMeta: metavalue,
          desc: description,
          valorAtual: 0,
        });
      }
      return true;
    } catch (e) {
      console.log('Projeto salvo' + e);
      return false;
    }
  };

  const del = async id => {
    try {
      await firestore().collection('projetos').doc(id).delete();
      return true;
    } catch (e) {
      console.log('Projeto deletado' + e);
      return false;
    }
  };

  return (
    <ProjetoContext.Provider value={{projects, save, del}}>
      {children}
    </ProjetoContext.Provider>
  );
};
