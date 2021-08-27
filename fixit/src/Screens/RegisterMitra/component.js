import React, { useState } from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';
import baseURL from '../../baseURL';
import BassicTitlePass from '../../components/BassicTitlePass/component';

const RegisterMitra = ({navigation}) => {
  const [mitra, setMitra] = useState({
    name: '',
    telephone: '',
    email: '',
    password: '',
    confirmationPassword: '',
    role_id: 2,
    address: '',
    province: '',
    city: '',
  });

  const onChangeName = value => {
    setMitra({...mitra, name: value});
  };

  const onChangeEmail = value => {
    setMitra({...mitra, email: value});
  };

  const onChangePassword = value => {
    setMitra({...mitra, password: value});
  };

  const onChangeConfirmationPassword = value => {
    setMitra({...mitra, confirmationPassword: value});
  
  };

  const onChangeTelephone = value => {
    setMitra({...mitra, telephone: value});
  };

  const onChangeAddress = value => {
    setMitra({...mitra, address: value});
  };

  const onChangeProvince = value => {
    setMitra({...mitra, province: value});
  };

  const onChangeCity = value => {
    setMitra({...mitra, city: value});
  };

  const postRegister = async () => {
    try {
      const res = await baseURL.post('/users/register', {
        name: mitra.name,
        telephone: mitra.telephone,
        email: mitra.email,
        password: mitra.password,
        confirmationPassword: mitra.confirmationPassword,
        role_id: mitra.role_id,
        address: mitra.address,
        province: mitra.province,
        city: mitra.city,
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
        <Back custom={styles.backButton} />
      </View>
        <Text style={styles.textHeader}>Welcome to FIX IT </Text>
        <BassicTitle
          title="Nama Lengkap"
          label="Ex: John Doe"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
          changeText={value => onChangeName(value)}
        />
        <BassicTitle
          title="Email"
          label="Ex: johndoe@gmail.com"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
          changeText={value => onChangeEmail(value)}
        />
        <BassicTitlePass
          title="Password"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
          changeText={value => onChangePassword(value)}
        />
        <BassicTitlePass
          title="Konfirmasi Password"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
          changeText={value => onChangeConfirmationPassword(value)}
        />
        <BassicTitle
          title="Nomor Telepon"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
          changeText={value => onChangeTelephone(value)}
        />
        <BassicTitle
          title="Alamat Lengkap"
          label="Ex: Perumahan Telkom"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
          changeText={value => onChangeAddress(value)}
        />
        <BassicTitle
          title="Provinsi"
          label="Jawa Tengah"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
          changeText={value => onChangeProvince(value)}
        />
        <BassicTitle
          title="Kota / Kabupaten"
          label="Cilacap"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
          changeText={value => onChangeCity(value)}
        />
        <Text style={styles.headWarning}>By signing up, you agree to our</Text>
        <Text style={styles.footerWarning}>
          Terms of Services & Privacy Policy
        </Text>
        <Button
          customContainer={styles.button}
          title="Daftar Sekarang"
          onPress={async () => {
            await postRegister();
            navigation.navigate('Login');
          }}
        />
      </ScrollView>
    </View>
  );
};

export default RegisterMitra;
