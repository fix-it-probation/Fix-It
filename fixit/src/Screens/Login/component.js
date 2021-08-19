import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';
import Button from '../../Components/Button';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';

const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <Image source={IMAGES.backButton} style={styles.backButton} />
      </TouchableOpacity>
      <Text style={styles.textHeader}>Selamat datang kembali</Text>
      <Text style={styles.textWarning}>
        Login menggunakan email dan password.
      </Text>
      <BassicTitle
        title="Email"
        customContainer={styles.inputEmail}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
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
