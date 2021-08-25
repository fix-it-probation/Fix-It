import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';
import {AuthContext} from '../../components/Context';
import baseURL, {base} from '../../baseURL';
import CookieManager from '@react-native-cookies/cookies';

const Login = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [disableButton, setdisableButton] = useState(true);

  const {_Login} = useContext(AuthContext);

  const LoginHandle = async (username, password) => {
    try {
      const res = await baseURL.post('/users/login', {
        email: username,
        password: password,
      });
      console.log(res);
      CookieManager.get(base + '/user/login').then(cookies => {
        console.log('CookieManager.get =>', cookies);
        const accessToken = cookies['access-token'].value
        _Login(accessToken);
      });
    } catch (error) {
      alert(error.message);
    }
  };

  console.log('=== disabled', disableButton);

  const onChangeEmail = value => {
    setUser({...user, email: value});
  };
  const onChangePassword = value => {
    setUser({...user, password: value});
  };

  const checkField = () => {
    console.log('===checkfield', checkField);
    if (email === '' || password === '') {
      setdisableButton({disableButton: false});
    } else {
      setdisableButton({disableButton: true});
    }
  };

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <Back custom={styles.backButton} />
      <Text style={styles.textHeader}>Selamat datang kembali</Text>
      <Text style={styles.textWarning}>
        Login menggunakan email dan password.
      </Text>
      <BassicTitle
        title="Email"
        customContainer={styles.inputEmail}
        customTextInput={styles.fieldInput}
        changeText={onChangeEmail}
      />
      <BassicTitle
        title="Password"
        customContainer={styles.inputPass}
        customTextInput={styles.fieldInput}
        changeText={onChangePassword}
      />
      <Button
        customContainer={styles.button}
        title="Lanjut"
        //onPress={() => navigation.push('Home')}
        onPress={() => {
          LoginHandle(user.email, user.password);
        }}
      />
    </View>
  );
};

export default Login;
