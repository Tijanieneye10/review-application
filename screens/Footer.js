import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Footer = ({ navigation }) => (
 <Appbar style={styles.bottom}>
   <Appbar.Action
     icon="home"
     onPress={() => navigation.navigate('Home')}
    />
    <Appbar.Action icon="plus-circle-multiple" onPress={() =>{ navigation.navigate('Details')}} />
    <Appbar.Action icon="card-account-phone" onPress={() => console.log('Pressed mail')} />
    <Appbar.Action icon="share-variant" onPress={() => console.log('Pressed label')} />
  
  </Appbar>
 );

export default Footer

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'space-around',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});