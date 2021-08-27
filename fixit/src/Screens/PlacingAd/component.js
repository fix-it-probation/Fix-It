import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import Back from '../../components/Back';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';

const PlacingAd = ({navigation}) => {

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textHeader}>Pasang Iklan di Fix It</Text>
      </View>
      <Text style={styles.textBody}>Selain iklan feed dan jasa, kami juga menyediakan beberapa iklan jenis lain, seperti : </Text>
      <Text style={styles.textTitle}>Banner</Text>
      <Image source={IMAGES.banner} style={styles.img} />
      <Text style={styles.textTitle}>Top up</Text>
      <Image source={IMAGES.topup} style={styles.img} />
      <Text style={styles.textBody}>Untuk info lebih lanjut terkait harga dan pemasangan Anda dapat menghubungi kami melalui </Text>
      <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 36,}}>
        <Image source={IMAGES.email} />
        <Text style={{marginLeft: 10}}>fixit@gmail.com</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 36, marginBottom: 20}}>
        <Image source={IMAGES.phone} />
        <Text style={{marginLeft: 10}}>0926453333</Text>
      </View>
      </ScrollView>
    </View>
  );
};

export default PlacingAd;
