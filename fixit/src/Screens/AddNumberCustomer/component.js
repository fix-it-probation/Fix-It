import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import IMAGES from '../../configs';
import { COLOR_WHITE } from '../../styles';

const AddNumberCustomer = ({ navigation }) => {
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
      />
      <Text style={styles.textWarning}>Minimal 9 karakter</Text>
      <Button customContainer={styles.button} title="Lanjutkan" onPress={() => navigation.push('AddAddressCustomer')} />
    </View>
  );
};

export default AddNumberCustomer;
