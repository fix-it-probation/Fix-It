import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';
import Button from '../../Components/Button';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';
import {useState} from 'react';

const RegisterCustomer = ({navigation}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role_id: 3,
  });

  const onChangeName = value => {
    setUser({...user, name: value});
  };

  const onChangeEmail = value => {
    setUser({...user, email: value});
  };

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <View style={{flexDirection: 'row'}}>
          <Image source={IMAGES.backButton} style={styles.backButton} />
          <Text style={styles.textIndicator}>1 dari 4</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textHeader}>Welcome to Fix it </Text>
      <BassicTitle
        title="Nama Lengkap"
        label="Ex: John Doe"
        customContainer={styles.inputName}
        customTextInput={styles.fieldInput}
        changeText={value => onChangeName(value)}
      />
      <BassicTitle
        title="Email"
        label="Ex: johndoe@gmail.com"
        customContainer={styles.inputEmail}
        customTextInput={styles.fieldInput}
        changeText={value => onChangeEmail(value)}
      />
      <Button
        customContainer={styles.button}
        title="Lanjut"
        onPress={() => navigation.navigate('CreatePassCustomer', user)}
      />
    </View>
  );
};

export default RegisterCustomer;
