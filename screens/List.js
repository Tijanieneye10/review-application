import  React, {useState} from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Card, Title, Paragraph, Divider } from 'react-native-paper';


const List = () => {
  const [data, setData] = useState([
    {key: 1, title: 'Tell us About your Self', body: 'Dolor aute duis et dolor ipsum magna officia excepteur ut. Enim consectetur duis ad aute. Consectetur laborum ea tempor dolor ullamco in esse ullamco minim laborum sunt.' },
    {key: 2, title: 'What is your weakness', body: 'Magna fugiat laboris non id irure et cupidatat fugiat et. Do ipsum ea ea elit sunt non eiusmod ipsum. Elit pariatur culpa esse velit non magna irure fugiat ea qui sunt adipisicing culpa deserunt.' },
    {key: 3, title: 'Tell us About your Self', body: 'Dolor aute duis et dolor ipsum magna officia excepteur ut. Enim consectetur duis ad aute. Consectetur laborum ea tempor dolor ullamco in esse ullamco minim laborum sunt.' },
    {key: 4, title: 'Tell us About your Self', body: 'Dolor aute duis et dolor ipsum magna officia excepteur ut. Enim consectetur duis ad aute. Consectetur laborum ea tempor dolor ullamco in esse ullamco minim laborum sunt.' },
    {key: 5, title: 'Tell us About your Self', body: 'Dolor aute duis et dolor ipsum magna officia excepteur ut. Enim consectetur duis ad aute. Consectetur laborum ea tempor dolor ullamco in esse ullamco minim laborum sunt.' },
    {key: 6, title: 'Tell us About your Self', body: 'Dolor aute duis et dolor ipsum magna officia excepteur ut. Enim consectetur duis ad aute. Consectetur laborum ea tempor dolor ullamco in esse ullamco minim laborum sunt.' }
])
   return(
     <>
    <FlatList 
    data={data}
    keyExtractor={item => item.key.toString()}
    renderItem={({ item}) =>(
      <TouchableOpacity onPress={()=> navigation.navigate('details', item)}>
      <Card style={styles.spaceBetween}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Divider/>
        <Paragraph>{item.body}</Paragraph>
      </Card.Content>
    </Card>
    </TouchableOpacity>
    )}
    />
    
      </>
   )};

const styles = StyleSheet.create({
    spaceBetween:{
        marginVertical: 5
    },
})

 export default List
