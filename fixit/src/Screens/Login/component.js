import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';

const Login = () => {
  return (
    <View>
      <Text style={styles.textHeader}>Login</Text>
      <BassicTitle label="Nama" customContainer={styles.inputName} />
      <BassicTitle
        label="Password"
        secureTextEntry={true}
        customContainer={styles.inputPass}
      />
    </View>
  );
};

export default Login;
