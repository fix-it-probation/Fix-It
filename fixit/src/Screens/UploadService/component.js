import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Back from '../../components/Back';
import { COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';

const UploadService = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textHeader}>Unggah Jasa</Text>
      </View>
      <Text style={styles.textBody}>Foto Jasa</Text>
      <TouchableOpacity>
        <Image source={IMAGES.addImgService} style={styles.addImage} />
      </TouchableOpacity>
      <BassicTitle title="Judul" customContainer={styles.form} />
      <BassicTitle title="Harga Jasa" customContainer={styles.form} />
      <BassicTitle title="Durasi Penayangan" customContainer={styles.form} />
      <Text style={styles.textWarning}>per minggu</Text>
      <BassicTitle title="Deskripsi" customContainer={styles.form} customTextInput={styles.fieldInput} />
      <BassicTitle title="Provinsi" customContainer={styles.form} />
      <BassicTitle title="Kota" customContainer={styles.form} />
      <BassicTitle title="Alamat" customContainer={styles.form} />
      <Button onPress={() => navigation.navigate('PaymentConfirmation')} title="Lanjut" customContainer={styles.button} />
      </ScrollView>
    </View>
  );
};

export default UploadService;
