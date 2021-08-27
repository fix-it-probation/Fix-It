import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Search from '../../components/SearchBar';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import CardItem from '../../components/CardItem';

const SearchCustomer= ({titleCard, price, year, service, sumService}) => {
  titleCard = "Jasa Renovasi Rumah"
  price="Rp.5.000.000"
  year="2021"
  service="Tukang cat"
  sumService="10 Jasa"
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Search label="Cari tukang cat" customContainer={styles.searchBar} />
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.textDesc}>Menampilkan hasil untuk "{service}"</Text>
        <View style={{backgroundColor: COLOR_BASE_PRIMARY_MAIN, 
          height: 18, width: 52, borderRadius: 20, marginLeft: 96,}}>
          <Text style={styles.textSumService}>{sumService}</Text>
        </View>
      </View>
      <CardItem images={IMAGES.result} title={titleCard} customCard={styles.card} price={price} year={year}/>
      <CardItem images={IMAGES.result} title={titleCard} customCard={styles.card} price={price} year={year}/>
      <CardItem images={IMAGES.result} title={titleCard} customCard={styles.card} price={price} year={year}/>
      <CardItem images={IMAGES.result} title={titleCard} customCard={styles.card} price={price} year={year}/>
      </ScrollView>
    </View>
  );
};

export default SearchCustomer;
