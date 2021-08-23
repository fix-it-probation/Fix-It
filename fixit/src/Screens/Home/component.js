import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Search from '../../components/SearchBar';
import Icon from '../../components/Icon';
import { COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import Card from '../../components/Card';

const Home = ({user}) => {
  user = "Alex"
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <Text style={styles.textHeader}>Selamat Datang, {user}</Text>
      <Search label="Cari tukang cat" customContainer={styles.searchBar} />
      <View style={styles.icon}>
        <Icon images={IMAGES.iconCat} label="Cat" customContainer={styles.iconAir} />
        <Icon images={IMAGES.iconAir} label="Air" customContainer={styles.iconAir} />
        <Icon images={IMAGES.iconListrik} label="Listrik" customContainer={styles.iconAir} />
        <Icon images={IMAGES.iconBor} label="Bor" customContainer={styles.iconAir} />
        <Icon images={IMAGES.iconToilet} label="Toilet" customContainer={styles.iconAir} />
        <Icon images={IMAGES.iconRenov} label="Renovasi" customContainer={styles.iconAir} />
        <Icon images={IMAGES.iconKeramik} label="Keramik" customContainer={styles.iconAir} />
        <Icon images={IMAGES.iconBangunan} label="Bangunan" customContainer={styles.iconAir} />
      </View>
      <Text style={styles.textBody}>Info dan Promo Spesial</Text>
      <Card images={IMAGES.cardHome} customContainer={styles.cardHome} />
    </View>
  );
};

export default Home;
