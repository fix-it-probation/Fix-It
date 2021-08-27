import React from 'react'
import { View, Text, Image } from 'react-native'
import CardAdmin from '../../components/CardAdmin/component';
import IMAGES from '../../configs';
import { COLOR_WHITE } from '../../styles';
import styles from './styles';

const HomeAdmin = ({ labelMitra, labelFeed, navigation }) => {
  labelMitra = "10"
  labelFeed = "4"
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <View style={styles.card}>
        <Image source={IMAGES.avatar} style={styles.avatar} />
        <Text style={styles.textProfile}>Admin</Text>
      </View>
      <Text style={styles.textHeader}>Penting hari ini</Text>
      <Text style={styles.textBody}>Aktivitas yang perlu kamu pantau untuk jaga kepuasan user</Text>
      <View style={{flexDirection: 'row'}}>
        <CardAdmin onPress={() => navigation.navigate('VerifyMitra')}
        images={IMAGES.verifyMitra} title="Verifikasi Mitra" label={labelMitra} customContainer={styles.cardMitra} />
        <CardAdmin onPress={() => navigation.navigate('VerifyFeed')}
        images={IMAGES.verifyFeed} title="Verifikasi Feed" label={labelFeed} customContainer={styles.cardFeed} />
      </View>
    </View>
  )
}

export default HomeAdmin;
