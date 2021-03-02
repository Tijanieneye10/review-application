import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const BottomNav = ({ navigation }) => (
  <FAB
    style={styles.fab}
    icon="plus-circle-multiple"
    animated={true}
    color="#f4f4f4"
    onPress={() => navigation.navigate('Details')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 60,
    backgroundColor: '#041f3a'
  },
})

export default BottomNav;