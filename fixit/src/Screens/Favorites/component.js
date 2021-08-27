import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import Search from '../../components/SearchBar';
import { COLOR_WHITE } from '../../styles';
import IMAGES from '../../configs';
import CardItem from '../../components/CardItem';

const Favorites = ({titleCard, price, year}) => {
  titleCard = "Jasa Renovasi Rumah"
  price="Rp.5.000.000"
  year="2021"
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Search label="Cari tukang cat" customContainer={styles.searchBar} />
      <CardItem images={IMAGES.result} title={titleCard} customCard={styles.card} price={price} year={year}/>
      <CardItem images={IMAGES.result} title={titleCard} customCard={styles.card} price={price} year={year}/>
      </ScrollView>
    </View>
  );
};

export default Favorites;
