import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { COLOR_WHITE } from '../../styles';
import Back from '../../components/Back';
import IMAGES from '../../configs';
import styles from './styles';
import Search from '../../components/SearchBar';
import CardStatus from '../../components/CardStatus';

const VerifyFeed = ({ labelMitra, labelFeed, status, date, labelStatus, person, navigation }) => {
  labelMitra = "10"
  labelFeed = "4"
  status = "Perlu Verifikasi"
  date = "05/07/21"
  labelStatus = "TERIMA JASA PEMASANGAN KERAMIK, BISA PANGGIL KAPAN-KAPAN. HEHE"
  person = "Bapak Sepak pojok"
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textHeader}>Verifikasi Feed</Text>
      </View>
      <Search label="Cari mitra" customContainer={styles.searchBar} />
      <View style={{marginTop: 28, flexDirection: 'row', alignSelf: 'center'}}>
      <TouchableOpacity style={styles.card}>
        <Text style={styles.textStatus}>Perlu Verifikasi</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card2}>
        <Text style={styles.textStatus2}>Verifikasi Selesai</Text>
      </TouchableOpacity >
      <TouchableOpacity style={styles.card3}>
        <Text style={styles.textStatus2}>Dibatalkan</Text>
      </TouchableOpacity>
      </View>
      <CardStatus onPress={() => navigation.navigate('DetailFeedAdmin')}
      images={IMAGES.logo} status={status} date={date} label={labelStatus} person={person} customCard={styles.cardStatus} />
    </View>
  )
}

export default VerifyFeed;
