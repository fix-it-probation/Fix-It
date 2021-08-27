import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';
import IMAGES from '../../configs';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';

const UploadFeed = ({navigation}) => {
  const [feed, setFeed] = useState({
    title: '',
    description: '',
    totalDay: '',
    user_id: '',
  });

  const onChangeTitle = value => {
    setFeed({...feed, title: value});
  };

  const onChangeDescription = value => {
    setFeed({...feed, description: value});
  };

  const onChangeTotalDay = value => {
    setFeed({...feed, totalDay: value});
  };

  const getId = async () => {
    try {
      const res = await baseURL.get('/users/profile');
      setService({...service, user_id: res.data['id']});
    } catch (error) {
      console.log(error);
    }
  };
  getId();

  return (
    <View style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Back
            onPress={() => navigation.goBack()}
            custom={styles.backButton}
          />
          <Text style={styles.textHeader}>Unggah Feed</Text>
        </View>
        <Text style={styles.textBody}>Foto Iklan</Text>
        <TouchableOpacity>
          <Image source={IMAGES.addImgAdvert} style={styles.addImage} />
        </TouchableOpacity>
        <BassicTitle
          title="Judul"
          customContainer={styles.form}
          changeText={onChangeTitle}
        />
        <BassicTitle
          title="Deskripsi"
          customContainer={styles.form}
          customTextInput={styles.fieldInput}
          changeText={onChangeDescription}
        />
        <BassicTitle
          title="Durasi Penayangan"
          customContainer={styles.form}
          changeText={onChangeTotalDay}
        />
        <Text style={styles.textWarning}>per minggu</Text>
        <Button
          onPress={() => navigation.navigate('PaymentConfirmationFeed', feed)}
          title="Lanjut"
          customContainer={styles.button}
        />
      </ScrollView>
    </View>
  );
};

export default UploadFeed;
