import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import IMAGES from '../../configs';
import { COLOR_WHITE } from '../../styles';

const RegisterMitra = ({ navigation }) => {
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <View style={{flexDirection: 'row'}}>
          <Image source={IMAGES.backButton} style={styles.backButton} />
        </View>
      </TouchableOpacity>
      <Text style={styles.textHeader}>Welcome to FIX IT </Text>
      <BassicTitle
        title ="Nama Lengkap"
        label="Ex: John Doe" 
        customContainer={styles.inputField}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Email"
        label="Ex: johndoe@gmail.com" 
        customContainer={styles.inputField}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Password"
        customContainer={styles.inputField}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Konfirmasi Password"
        customContainer={styles.inputField}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Nomor Telepon"
        customContainer={styles.inputField}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Alamat Lengkap"
        label="Ex: Perumahan Telkom"
        customContainer={styles.inputField}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Provinsi"
        label="Jawa Tengah"
        customContainer={styles.inputField}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Kota / Kabupaten"
        label="Cilacap"
        customContainer={styles.inputField}
        customTextInput={styles.fieldInput}
      />
      <Button customContainer={styles.button} title="Daftar Sekarang" onPress={() => navigation.push('Login')} />
      </ScrollView>
    </View>
  );
};

export default RegisterMitra;
