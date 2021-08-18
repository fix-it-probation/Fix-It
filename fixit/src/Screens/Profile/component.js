import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Home = () => {
  return (
    <View style={{backgroundColor: '#c4c4c4', flex:1}}>
      <Text style={styles.textHeader}>Profile</Text>
      <Text style={styles.textBody}>Nama</Text>
      <Text style={styles.textBody}>Email</Text>
      <Text style={styles.textTelp}>Nomor Telepon</Text>
      <Text style={styles.textHeader}>Keamanan</Text>
      <Text style={styles.textBody}>Password</Text>
    </View>
  );
};

export default Home;
