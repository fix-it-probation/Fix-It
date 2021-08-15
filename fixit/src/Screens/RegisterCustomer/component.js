import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import IMAGES from '../../configs';
import { COLOR_WHITE } from '../../styles';

const Register = ({ navigation }) => {
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
        title ="Nama Lengkap"
        label="Ex: John Doe" 
        customContainer={styles.inputName}
        customTextInput={styles.fieldInput}
      />
      <BassicTitle
        title="Email"
        label="Ex: johndoe@gmail.com" 
        customContainer={styles.inputEmail}
        customTextInput={styles.fieldInput}
      />
      <Button customContainer={styles.button} title="Lanjut" onPress={() => navigation.push('CreatePassCustomer')} />
    </View>
  );
};

export default Register;
