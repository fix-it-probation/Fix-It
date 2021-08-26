import React, { useState } from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';
import baseURL from '../../baseURL';

const AddAddressCustomer = ({route, navigation}) => {
  const [user, setUser] = useState({
    name: route.params.name,
    telephone: route.params.telephone,
    email: route.params.email,
    password: route.params.password,
    confirmationPassword: route.params.confirmationPassword,
    role_id: route.params.role_id,
    address: '',
    province: '',
    city: '',
  });

  const onChangeAddress = value => {
    setUser({...user, address: value});
  };

  const onChangeProvince = value => {
    setUser({...user, province: value});
  };

  const onChangeCity = value => {
    setUser({...user, city: value});
  };

  console.log(user);

  const postRegister = async () => {
    try {
      const res = await baseURL.post('/users/register', {
        name: user.name,
        telephone: user.telephone,
        email: user.email,
        password: user.password,
        confirmationPassword: user.confirmationPassword,
        role_id: user.role_id,
        address: user.address,
        province: user.province,
        city: user.city,
      });
      console.log(res);
      alert('Verifikasi Emailmu');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textIndicator}>4 dari 4</Text>
      </View>
      <Text style={styles.textHeader}>Masukkan Alamat</Text>
      <KeyboardAvoidingView>
      <BassicTitle
        label="Ex: Perumahan Telkom"
        title="Alamat Lengkap"
        customContainer={styles.inputAddress}
        customLabel={styles.labelName}
        customTextInput={styles.fieldInput}
        changeText={value => onChangeAddress(value)}
      />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView>
      <BassicTitle
        title="Provinsi"
        label="Ex: Jawa Tengah"
        customContainer={styles.inputBody}
        customLabel={styles.labelPass}
        customTextInput={styles.fieldInput}
        changeText={value => onChangeProvince(value)}
      />
      </KeyboardAvoidingView>
      <KeyboardAvoidingView>
      <BassicTitle
        title="Kota / Kabupaten"
        label="Ex: Cilacap"
        customContainer={styles.inputBody}
        customLabel={styles.labelPass}
        customTextInput={styles.fieldInput}
        changeText={value => onChangeCity(value)}
      />
      </KeyboardAvoidingView>
      <Button
        customContainer={styles.button}
        title="Daftar Sekarang"
        onPress={async () => {
          await postRegister();
          navigation.navigate('Login');
        }}
      />
      <Text style={styles.headWarning}>By signing up, you agree to our</Text>
      <Text style={styles.footerWarning}>
        Terms of Services & Privacy Policy
      </Text>
      </ScrollView>
    </View>
  );
};

export default AddAddressCustomer;
