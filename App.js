import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './MainNavigator'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#041f3a',
    text: 'black',
    accent: '#f4f4f4',
  },
};


export default function App() {
  return (
    <PaperProvider  theme={theme}>
          <MainNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
