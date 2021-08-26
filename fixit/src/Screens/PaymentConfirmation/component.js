import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Back from '../../components/Back';
import { COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import styles from './styles';
import Button from '../../components/Button';

const PaymentConfirmation = ({ price, navigation }) => {
  price= "Rp. 500.000"
  return (
    <View style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textHeader}>Pembayaran</Text>
      </View>
      <Text style={styles.textPrice}>Total Harga Iklan</Text>
      <View style={styles.cardPrice}>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Text style={styles.textBody}>Unggah Bukti Pembayaran</Text>
      <TouchableOpacity>
        <Image source={IMAGES.addImgAdvert} style={styles.addImage} />
      </TouchableOpacity>
      <Button onPress={() => navigation.navigate('PaymentConfirmationProcess')} title="Pasang Iklan Sekarang" customContainer={styles.button} />
      </ScrollView>
    </View>
  );
};

export default PaymentConfirmation;
