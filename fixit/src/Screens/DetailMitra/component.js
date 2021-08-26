import React from 'react';
import {View, Image, ScrollView,Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Back from '../../components/Back';
import CardProfileMitra from '../../components/CardProfileMitra';
import { COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import Button from '../../components/Button';

const DetailMitra = ({service, price, desk, textAddress}) => {
  service = "Tukang Cat Panggilan"
  price="Rp.50.000 - 500.000"
  desk="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada morbi tortor orci placerat in viverra. Vel blandit massa rutrum risus faucibus tincidunt. Varius nec accumsan sit amet. Nulla non orci dolor in a adipiscing. Ut augue convallis sed in luctus ut ridiculus mattis porttitor."
  textAddress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
          <Text style={styles.textTitle}>Mitra</Text>
          <TouchableOpacity>
            <Image source={IMAGES.favorites} style={styles.favorites} />
          </TouchableOpacity>
        </View>
      <Image source={IMAGES.cardHome} style={styles.image} />
      <Text style={styles.textPrice}>{price}</Text>
      <Text style={styles.textService}>{service}</Text>
      <Text style={styles.headDesk}>Deskripsi</Text>
      <Text style={styles.textDesk}>{desk}</Text>
      <CardProfileMitra images={IMAGES.avatar} title="Muhammad Ibnu" city="Kab Cilacap" customCard={styles.profileMitra} />
      <Text style={styles.address}>Alamat</Text>
      <Text style={styles.textAddress}>{textAddress}</Text>
      <Button title="Hubungi" customContainer={styles.button} />
      </ScrollView>
    </View>
  );
};

export default DetailMitra;
