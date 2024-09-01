import React, {useContext, useEffect, useState} from 'react';
import LogoutButton from '../../components/LogoutButton';
import ProfileButton from '../../components/ProfileButton';
import FloatButton from '../../components/FloatButton';
import {Container, Header, Projetos} from './styles';
import Item from './Item';
import {ProjetoContext} from '../../Context/ProjetoProviders';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';

export default Home = ({navigation}) => {
  const {projects} = useContext(ProjetoContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth().currentUser;
      if (user) {
        const userDoc = await firestore()
          .collection('users')
          .doc(user.uid)
          .get();
        if (userDoc.exists) {
          setUserName(userDoc.data().name);
        }
      }
    };
    fetchUserName();
  }, []);

  const logOutUser = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  };

  // const routeProject = value => {
  //   navigation.navigate('EditProject', {value});
  // };

  const routeProject = item => {
    navigation.navigate({name: 'EditProject', params: {projeto: item}});
  };

  const profileUSer = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <Container>
      <Header>
        <ProfileButton onClick={() => profileUSer()} userName={userName} />
        <LogoutButton logout={logOutUser} />
      </Header>
      <Projetos
        data={projects}
        renderItem={({item}) => (
          <Item item={item} onPress={() => routeProject(item)} />
        )}
        keyExtractor={item => item.id}
      />
      <FloatButton onClick={() => routeProject(null)} />
    </Container>
  );
};
