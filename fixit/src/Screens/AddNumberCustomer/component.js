import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';
import Button from '../../Components/Button';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';
import {useState} from 'react';

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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row'}}>
          <Image source={IMAGES.backButton} style={styles.backButton} />
          <Text style={styles.textIndicator}>3 dari 4</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textHeader}>Masukkan Nomor Telepon</Text>
      <BassicTitle
        label="+62 |"
        title="Nomor Telepon"
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
