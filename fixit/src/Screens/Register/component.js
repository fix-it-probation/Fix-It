import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';

const Register = () => {
  return (
    <View>
      <Text style={styles.textHeader}>Register</Text>
      <BassicTitle label="Nama" customContainer={styles.inputName} />
      <BassicTitle label="Nomor Telepon" customContainer={styles.inputTel} />
      <BassicTitle label="Email" customContainer={styles.inputEmail} />
      <BassicTitle label="Password" customContainer={styles.inputPass} />
    </View>
  );
};

export default Register;
