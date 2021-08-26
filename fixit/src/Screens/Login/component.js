import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';
import BassicTitlePass from '../../components/BassicTitlePass';

const Login = ({ navigation }) => {

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <Back onPress={() => navigation.goBack()} custom={styles.backButton}/>
      <Text style={styles.textHeader}>Selamat datang kembali</Text>
      <Text style={styles.textWarning}>
        Login menggunakan email dan password.
      </Text>
      <BassicTitle
        title="Email"
        customContainer={styles.inputEmail}
        customTextInput={styles.fieldInput}
      />
      <BassicTitlePass
        title="Password"
        customContainer={styles.inputPass}
        customTextInput={styles.fieldInput}
      />
      <Button
        customContainer={styles.button}
        title="Lanjut"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
};

export default Login;
