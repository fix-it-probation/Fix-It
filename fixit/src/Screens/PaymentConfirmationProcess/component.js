import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Back from '../../components/Back';
import { COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import styles from './styles';
import Button from '../../components/Button';

const PaymentConfirmationProcess = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={IMAGES.illusConfirmPay} style={styles.imgConfirm} />
      <Text style={styles.textTitle}>Permintaan kamu sedang kami proses.</Text>
      <Text style={styles.textBody}>Kamu bisa menambah jasa/iklan lain dan menutup halaman ini. 
      Kami akan segera memposting iklan/jasa kamu jika transaksi sudah berhasil.</Text>
      <Button onPress={() => navigation.navigate('HomeMitra') } title="Kembali ke Home" customContainer={styles.button} />
      </ScrollView>
    </View>
  );
};

export default PaymentConfirmationProcess;
