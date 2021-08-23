import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setdisableButton] = useState(true);

  console.log('=== disabled', disableButton) ;

  const _handleName = async text => {
    await useState({ email: text });
    checkField();
  };
  const _handlePassword = async text => {
    await useState({ password: text });
    checkField();
  };

  const checkField = () => {
    console.log('===checkfield', checkField)
    if (email === '' || password === '') {
     setdisableButton({disableButton: false});
    } else {
      setdisableButton({disableButton: true});
    }
  }

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <Back custom={styles.backButton}/>
      <Text style={styles.textHeader}>Selamat datang kembali</Text>
      <Text style={styles.textWarning}>
        Login menggunakan email dan password.
      </Text>
      <BassicTitle
        title="Email"
        customContainer={styles.inputEmail}
        customTextInput={styles.fieldInput}
        onChangeText={_handleName} 
      />
      <BassicTitle
        title="Password"
        customContainer={styles.inputPass}
        customTextInput={styles.fieldInput}
        onChangeText={_handlePassword} 
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
