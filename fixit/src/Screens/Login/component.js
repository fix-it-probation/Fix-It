import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';
import Button from '../../Components/Button';

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
      <Button customContainer={styles.button} title="Login" />
    </View>
  );
};

export default Login;
