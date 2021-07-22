import React from 'react';
// eslint-disable-next-line prettier/prettier
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Router from './src/Router/Router';


const App = () => {
  return (
    <Router />
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'green',
    fontSize: 32,
    fontWeight: 'bold',
    paddingVertical: 280,
    textAlign: 'center',
  },
});

export default App;
