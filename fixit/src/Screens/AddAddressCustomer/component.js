import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../Components/BassicTitle';
import Button from '../../Components/Button';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';
import {useState} from 'react';
import baseURL from '../../baseURL';
const AddAddressCustomer = ({route, navigation}) => {
  const [user, setUser] = useState({
    name: route.params.name,
    telephone: route.params.telephone,
    email: route.params.email,
    password: route.params.password,
    confirmationPassword: route.params.confirmationPassword,
    role_id: route.params.role_id,
  });
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
      });
      console.log(res);
      alert("Verifikasi Emailmu")
    } catch (error) {
      alert(error.message);
    }
  };
  const navigateLogin = () => navigation.navigate('Login');
  const postThenLogin = () => {
    postRegister();
    navigateLogin();
  };
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row'}}>
          <Image source={IMAGES.backButton} style={styles.backButton} />
          <Text style={styles.textIndicator}>4 dari 4</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.textHeader}>Masukkan Alamat</Text>
      <BassicTitle
        label="Ex: Perumahan Telkom"
        title="Alamat Lengkap"
        customContainer={styles.inputAddress}
        customLabel={styles.labelName}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Provinsi"
        label="Ex: Jawa Tengah"
        customContainer={styles.inputBody}
        customLabel={styles.labelPass}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Kota / Kabupaten"
        label="Ex: Cilacap"
        customContainer={styles.inputBody}
        customLabel={styles.labelPass}
        customTextInput={styles.fieldInput}
      />
      <Button
        customContainer={styles.button}
        title="Daftar Sekarang"
        onPress={postThenLogin}
      />
      <Text style={styles.headWarning}>By signing up, you agree to our</Text>
      <Text style={styles.footerWarning}>
        Terms of Services & Privacy Policy
      </Text>
    </View>
  );
};

export default AddAddressCustomer;
