import React, {createContext, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import {ApiContext} from './ApiProvider';

export const ProjetoContext = createContext({});

export const ProjetoProvider = ({children}) => {
  const [projects, setProjet] = React.useState([]);
  const {api} = React.useContext(ApiContext);

  useEffect(() => {
    if (api) {
      getProjects();
    }
  }, [api]);

  const getProjects = async () => {
    try {
      const response = await api.get('/projetos');
      console.log('Dados buscados via API');
      // console.log(response.data.documents);
      let data = [];

      response.data.documents.map(d => {
        let k = d.name.split(
          'projects/cleber-pdm-e4781/databases/(default)/documents/projetos/',
        );
        data.push({
          id: k[1],
          title: d.fields.title.stringValue,
          desc: d.fields.desc.stringValue,
          valorAtual: d.fields.valorAtual.integerValue,
          valorMeta: d.fields.valorMeta.integerValue,
        });
      });
      data.sort((a, b) => {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
          return -1;
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1;
        }
        return 0;
      });
      setProjet(data);
    } catch (response) {
      console.error('Erro em getProjects via API:');
      console.error(response);
    }
  };

  const saveProject = async val => {
    try {
      await api.post('/projetos/', {
        fields: {
          title: {stringValue: val.title},
          desc: {stringValue: val.desc},
          valorAtual: {integerValue: val.valorAtual},
          valorMeta: {integerValue: val.valorMeta},
        },
      });
      getProjects();
      return true;
    } catch (response) {
      console.error('Erro em save via API: ' + response);
      return false;
    }
  };

  const updateProject = async val => {
    try {
      await api.patch(`/projetos/${val.id}`, {
        fields: {
          title: {stringValue: val.title},
          desc: {stringValue: val.desc},
          valorAtual: {integerValue: val.valorAtual},
          valorMeta: {integerValue: val.valorMeta},
        },
      });
      getProjects();
      return true;
    } catch (response) {
      console.error('Erro em update via API: ' + response);
      return false;
    }
  };

  const deleteProject = async val => {
    try {
      await api.delete('/projetos/' + val);
      getProjects();
      return true;
    } catch (response) {
      console.error('Erro em delete via API: ' + response);
      return false;
    }
  };

  return (
    <ProjetoContext.Provider
      value={{projects, saveProject, updateProject, deleteProject}}>
      {children}
    </ProjetoContext.Provider>
  );

  // useEffect(() => {
  //   const listener = firestore()
  //     .collection('projetos')
  //     .onSnapshot(snapShot => {
  //       // console.log(snapShot);
  //       if (snapShot) {
  //         let d = [];
  //         snapShot.forEach(doc => {
  //           d.push({
  //             id: doc.id,
  //             title: doc.data().title,
  //             valorAtual: doc.data().valorAtual,
  //             valorMeta: doc.data().valorMeta,
  //             desc: doc.data().desc,
  //             urlFoto: doc.data().urlFoto,
  //           });
  //         });
  //         setProjet(d);
  //       }
  //     });
  //   return () => {
  //     listener();
  //   };
  // }, []);

  // const save = async (project, urlDevice) => {
  //   console.log(project, urlDevice);
  //   try {
  //     if (urlDevice !== '') {
  //       project.urlFoto = await sendImageToStorage(urlDevice, project);
  //       if (!project.urlFoto) {
  //         return false;
  //       }
  //     }

  //     const projectData = {
  //       title: project.title || '',
  //       valorMeta: project.valorMeta || '',
  //       desc: project.desc || '',
  //       urlFoto: project.urlFoto || '',
  //       valorAtual: project.valorAtual !== undefined ? project.valorAtual : 0,
  //     };

  //     if (project.id) {
  //       await firestore()
  //         .collection('projetos')
  //         .doc(project.id)
  //         .set(projectData);
  //     } else {
  //       console.log(project);
  //       await firestore().collection('projetos').add(projectData);
  //     }
  //     return true;
  //   } catch (e) {
  //     console.log('Projeto não salvo ' + e);
  //     return false;
  //   }
  // };

  // async function sendImageToStorage(urlDevice, project) {
  //   let imgRed = await ImageResizer.createResizedImage(
  //     urlDevice,
  //     300,
  //     300,
  //     'PNG',
  //     80,
  //   );

  //   const pathToStorage = `images/${project.title}/foto.png`;

  //   let url = '';
  //   const task = storage().ref(pathToStorage).putFile(imgRed?.uri);
  //   task.on('state_changed', taskSnapchot => {
  //     console.log(
  //       `${taskSnapchot.bytesTransferred} transferred out of ${taskSnapchot.totalBytes}`,
  //     );
  //   });

  //   await task.then(async () => {
  //     url = await storage().ref(pathToStorage).getDownloadURL();
  //   });
  //   task.catch(e => {
  //     console.error('alunoProvider, sendImageToStorage', e);
  //     url = null;
  //   });
  //   console.log(url + ' ouside');
  //   return url;
  // }

  // const del = async (id, path) => {
  //   try {
  //     await firestore().collection('projetos').doc(id).delete();
  //     await storage().ref(path).delete();
  //     return true;
  //   } catch (e) {
  //     console.log('Projeto deletado' + e);
  //     return false;
  //   }
  // };

  //   return (
  //     <ProjetoContext.Provider value={{projects, save, del}}>
  //       {children}
  //     </ProjetoContext.Provider>
  //   );
};
