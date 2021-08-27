import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { COLOR_WHITE } from '../../styles';
import Back from '../../components/Back';
import IMAGES from '../../configs';
import styles from './styles';
import CardDetailAdmin from '../../components/CardDetailAdmin/component';
import CardResult from '../../components/CardResult';
import Button from '../../components/Button';

const DetailMitraAdmin = ({ status, date, person, navigation }) => {
  status = "Perlu Verifikasi"
  date = "05 Ags 2021, 16:42 WIB"
  person = "Bapak Sepak pojok"
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textHeader}>Detail Mitra</Text>
      </View>
      <CardDetailAdmin status={status} person={person} date={date} customCard={styles.cardDetail} />
      <Text style={styles.textTitle}>Foto Jasa</Text>
      <Image source={IMAGES.result} style={styles.imgReview} />
      <CardResult title="Judul" result="Cat Tembok" customCard={styles.result} />
      <CardResult title="Harga Jasa" result="Rp. 500.000" customCard={styles.result} />
      <CardResult title="Deskripsi" result="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada morbi tortor orci placerat in viverra. Vel blandit massa rutrum risus faucibus tincidunt. Varius nec accumsan sit amet. Nulla non orci dolor in a adipiscing. Ut augue convallis sed in luctus ut ridiculus mattis porttitor." customCard={styles.result} />
      <CardResult title="Provinsi" result="Jawa Tengah" customCard={styles.result} />
      <CardResult title="Kota" result="Cilacap" customCard={styles.result} />
      <CardResult title="Alamat" result="Perumahan Telkom" customCard={styles.result} />
      <CardResult title="Durasi Penayangan" result="4" customCard={styles.result} />
      <CardResult title="Total Harga Iklan" result="Rp. 3.500.000" customCard={styles.result} />
      <Text style={styles.textTitle}>Bukti Bayar</Text>
      <Image source={IMAGES.result} style={styles.pay} />
      <View style={{flexDirection: 'row', top: 90, marginBottom: 50, alignSelf: 'center'}}>
        <Button title="Tolak" customContainer={styles.buttonTolak} customText={styles.textButton} />
        <Button title="Terima" customContainer={styles.buttonTerima} />
      </View>
      </ScrollView>
    </View>
  )
}

export default DetailMitraAdmin;
