import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Back from '../../components/Back';
import { COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';

const UploadFeed = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textHeader}>Unggah Feed</Text>
      </View>
      <Text style={styles.textBody}>Foto Iklan</Text>
      <TouchableOpacity>
        <Image source={IMAGES.addImgAdvert} style={styles.addImage} />
      </TouchableOpacity>
      <BassicTitle title="Judul" customContainer={styles.form} />
      <BassicTitle title="Deskripsi" customContainer={styles.form} customTextInput={styles.fieldInput} />
      <BassicTitle title="Durasi Penayangan" customContainer={styles.form} />
      <Text style={styles.textWarning}>per minggu</Text>
      <Button onPress={() => navigation.navigate('PaymentConfirmation')} title="Lanjut" customContainer={styles.button} />
      </ScrollView>
    </View>
  );
};

export default UploadFeed;
