import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';
import Button from '../../Components/Button';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';
import {useState} from 'react';

const CreatePassCustomer = ({route, navigation}) => {
  const [user, setUser] = useState({
    name: route.params.name,
    email: route.params.email,
    password: '',
    confirmationPassword: '',
    role_id: route.params.role_id,
  });

  const onChangePassword = value => {
    setUser({...user, password: value});
  };

  const onChangeConfirmationPassword = value => {
    setUser({...user, confirmationPassword: value});
  };

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row'}}>
          <Image source={IMAGES.backButton} style={styles.backButton} />
          <Text style={styles.textIndicator}>2 dari 4</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textHeader}>Buat password</Text>
      <Text style={styles.textWarning}>Masukkan minimal 8 karakter</Text>
      <BassicTitle
        label="Password"
        customContainer={styles.inputName}
        customLabel={styles.labelName}
        customTextInput={styles.fieldInput}
        changeText={value => onChangePassword(value)}
      />
      <BassicTitle
        label="Konfirmasi Password"
        customContainer={styles.inputPass}
        customLabel={styles.labelPass}
        customTextInput={styles.fieldInput}
        changeText={value => onChangeConfirmationPassword(value)}
      />
      <Button
        customContainer={styles.button}
        title="Lanjut"
        onPress={() => navigation.navigate('AddNumberCustomer', user)}
      />
    </View>
  );
};

export default CreatePassCustomer;
