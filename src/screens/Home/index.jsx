import React, {useContext, useState} from 'react';
import LogoutButton from '../../components/LogoutButton';
import {Container, Header, Projetos, Text} from './styles';
import Item from './Item';
import {ProjetoContext} from '../../Context/ProjetoProviders';

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

  const routeUser = value => {
    navigation.navigate('Projeto', {value});
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
          <Item item={item} onPress={() => routeUser(item)} />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};
