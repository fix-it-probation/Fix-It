import React, { useState } from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';

const AddNumberCustomer = ({route, navigation}) => {
  const [user, setUser] = useState({
    name: route.params.name,
    telephone: '',
    email: route.params.email,
    password: route.params.password,
    confirmationPassword: route.params.confirmationPassword,
    role_id: route.params.role_id,
  });

  const onChangeTelephone = value => {
    setUser({...user, telephone: value});
  };

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textIndicator}>3 dari 5</Text>
      </View>
      <Text style={styles.textHeader}>Masukkan Nomor Telepon</Text>
      <BassicTitle
        label="+62 |"
        title="Nomor Telepon"
        keyboardType="numeric"
        customContainer={styles.inputName}
        customLabel={styles.labelName}
        customTextInput={styles.fieldInput}
        changeText={value => onChangeTelephone(value)}
      />
      <Text style={styles.textWarning}>Minimal 9 karakter</Text>
      <Button
        customContainer={styles.button}
        title="Lanjutkan"
        onPress={() => navigation.navigate('AddAddressCustomer', user)}
      />
    </View>
  );
};

export default AddNumberCustomer;
