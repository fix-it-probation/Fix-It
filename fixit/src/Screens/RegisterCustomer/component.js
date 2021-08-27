import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import Back from '../../components/Back';
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
      <View style={{ flexDirection: 'row' }}>
        <Back custom={styles.backButton} />
        <Text style={styles.textIndicator}>1 dari 5</Text>
      </View>
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
