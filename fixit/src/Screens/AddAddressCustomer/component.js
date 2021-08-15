import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import IMAGES from '../../configs';
import { COLOR_WHITE } from '../../styles';

const AddAddressCustomer = ({ navigation }) => {
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
        label= "Ex: Perumahan Telkom"
        title= "Alamat Lengkap"
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
      <Button customContainer={styles.button} title="Daftar Sekarang" onPress={() => navigation.push('Home')} />
      <Text style={styles.headWarning}>By signing up, you agree to our</Text>
      <Text style={styles.footerWarning}>Terms of Services & Privacy Policy</Text>
    </View>
  );
};

export default AddAddressCustomer;
