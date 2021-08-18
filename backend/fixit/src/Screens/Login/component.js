import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';
import Button from '../../Components/Button';

const Login = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textHeader}>Login</Text>
      <BassicTitle label="Nama" customContainer={styles.inputName} />
      <BassicTitle
        label="Password"
        secureTextEntry={true}
        customContainer={styles.inputPass}
      />
      <Text style={{alignSelf: 'center'}}>Belum punya akun?
          <Text style={{color: 'green'}} onPress={() => navigation.push('Register')}> Daftar</Text>
      </Text>
      <Button customContainer={styles.button} title="Login" onPress={() => navigation.push('Home')} />
    </View>
  );
};

export default Login;
