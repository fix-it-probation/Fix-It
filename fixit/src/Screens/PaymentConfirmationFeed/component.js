import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';
import IMAGES from '../../configs';
import styles from './styles';
import Button from '../../components/Button';
import baseURL from '../../baseURL';

const PaymentConfirmationFeed = ({route, price, navigation}) => {
  const [feed, setFeed] = useState({
    title: route.params.title,
    description: route.params.description,
    link: '',
    totalDay: route.params.totalDay,
    totalPrice: '',
    image_url: '',
    user_id: route.params.user_id,
  });
  console.log(feed);

  const onChangeLink = value => {
    setFeed({...feed, link: value});
  };

  price = 'Rp.' + feed.totalDay * 50000;
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
          onPress={() => navigation.navigate('PaymentConfirmationProcessFeed')}
          title="Pasang Iklan Sekarang"
          customContainer={styles.button}
        />
      </ScrollView>
    </View>
  );
};

export default PaymentConfirmationFeed;
