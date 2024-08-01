import {useContext, useEffect, useState} from "react";
import {ProjetoContext} from "../../Context/ProjetoProviders";
import MyButton from "../../components/MyButton";
import { Container } from "./styles";

export default ({route, navigation}) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [metaValue, setMetaValue] = useState('');
  const [desc, setDesc] = useState('');
  const {projects} = useContext(ProjetoContext);
}

useEffect(() => {
  if(route.params.value){
    setId(route.params.value.id);
    setNome(route.params.value.title);
    setMetaValue(route.params.value.metavalue);
    setDesc(route.params.value.description);
  }
}, [route])

return (
  <Container>
    Hello
  </Container>
)