import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';
import Button from '../../Components/Button';

const Register = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textHeader}>Register</Text>
        <BassicTitle label="Nama" customContainer={styles.inputName} />
        <BassicTitle label="Nomor Telepon" customContainer={styles.inputTel} />
        <BassicTitle label="Email" customContainer={styles.inputEmail} />
        <BassicTitle label="Password" customContainer={styles.inputPass} />
        <Button customContainer={styles.button} title="Register" />
      </ScrollView>
    </View>
  );
};

export default Register;
