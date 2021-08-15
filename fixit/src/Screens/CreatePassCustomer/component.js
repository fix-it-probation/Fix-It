import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import IMAGES from '../../configs';
import { COLOR_WHITE } from '../../styles';

const CreatePassCustomer = ({ navigation }) => {
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
      />
      <BassicTitle
        label="Konfirmasi Password"
        customContainer={styles.inputPass}
        customLabel={styles.labelPass}
        customTextInput={styles.fieldInput}
      />
      <Button customContainer={styles.button} title="Lanjut" onPress={() => navigation.push('AddNumberCustomer')} />
    </View>
  );
};

export default CreatePassCustomer;
