import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';
import IMAGES from '../../configs';
import styles from './styles';
import Button from '../../components/Button';
import baseURL from '../../baseURL';

const PaymentConfirmationService = ({route, price, navigation}) => {
  const [service, setService] = useState({
    name: route.params.name,
    description: route.params.description,
    province: route.params.province,
    city: route.params.city,
    address: route.params.address,
    totalDay: route.params.totalDay,
    totalPrice: route.params.totalPrice,
    // image_url : req.file.filename,
    // image_url1: req.files['file1'][0].filename,
    // image_url2: req.files['file2'][0].filename,
    // image_url3: req.files['file3'][0].filename,
    user_id: route.params.user_id,
    isVerified: false,
  });
  console.log(service);

  price = 'Rp. ' + service.totalDay * 10000;
  return (
    <View style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Back
            onPress={() => navigation.goBack()}
            custom={styles.backButton}
          />
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
        <Button
          onPress={() =>
            navigation.navigate('PaymentConfirmationProcessService')
          }
          title="Pasang Iklan Sekarang"
          customContainer={styles.button}
        />
      </ScrollView>
    </View>
  );
};

export default PaymentConfirmationService;
