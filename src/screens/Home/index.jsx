import React, {useContext, useState} from 'react';
import LogoutButton from '../../components/LogoutButton';
import {Container, Header, Projetos, Text} from './styles';
import Item from './Item';
import {ProjetoContext} from '../../Context/ProjetoProviders';
import FloatButton from '../../components/FloatButton';

export default Home = ({navigation}) => {
  const {projects} = useContext(ProjetoContext);
  const [projetoTemp, setProjetoTemp] = useState([]);

  const logOutUser = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      }),
    );
  };

  const routeProject = value => {
    navigation.navigate('EditProject', {value});
  };

  return (
    <Container>
      <Header>
        <Text>Home</Text>
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
