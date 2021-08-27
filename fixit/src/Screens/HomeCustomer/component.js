import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Search from '../../components/SearchBar';
import Icon from '../../components/Icon';
import { COLOR_FIELD, COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import Card from '../../components/Card';
import Popup from '../../components/Popup';

const HomeCustomer= () => {
  const [user, setUser] = useState({
    name: '',
  });

  const getData = async () => {
    try {
      const res = await baseURL.get('/users/profile');
      setUser({
        ...user,
        name: res.data['name']
      });
    } catch (error) {
      alert(error.message);
    }
  };
  useEffect(() => {
    setTimeout(async () => {
      getData();
    }, 10);
  }, []);
  
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <Popup />
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
      <View style={{backgroundColor: COLOR_FIELD, height: 10, top: 26}} />
      <Text style={styles.textBody}>Info dan Promo Spesial</Text>
      <Card images={IMAGES.cardHome} customContainer={styles.cardHome} />
    </View>
  );
};

export default HomeCustomer;
