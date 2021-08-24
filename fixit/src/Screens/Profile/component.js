import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import IMAGES from '../../configs';
import { COLOR_FIELD, COLOR_WHITE } from '../../styles';
import Button from '../../components/Button';

const Home = ({ name, number, email }) => {
  name="Alex"
  number= "081272938932"
  email= "alex123@gmail.com"
  return (
    <View style={{backgroundColor: COLOR_FIELD, flex:1}}>
      <View style={{backgroundColor: COLOR_WHITE, height: 110}}>
        <Image source={IMAGES.avatar} style={styles.avatar} />
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textBody}>{number}</Text>
        <Text style={styles.textBody}>{email}</Text>
      </View>
      <View style={{backgroundColor: COLOR_WHITE, height: 160, marginTop: 8,}}>
        <Text style={styles.textTitle}>Akun</Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={IMAGES.edit} style={styles.Icon} />
          <Text style={styles.textEdit}>Ubah Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 16}}>
          <Image source={IMAGES.safety} style={styles.Icon} />
          <Text style={styles.textEdit}>Keamanan Akun</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: COLOR_WHITE, height: 100, marginTop: 8,}} >
        <Text style={styles.textTitle}>Seputar Aplikasi</Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={IMAGES.star} style={styles.Icon} />
          <Text style={styles.textEdit}>Ulas Aplikasi ini</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textVersion}>Version 1.0.0</Text>
      <Button title="Sign Out" customContainer={styles.button} />
    </View>
  );
};

export default Home;
