import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';
import IMAGES from '../../configs';
import styles from './styles';
import BassicTitle from '../../components/BassicTitle';
import Button from '../../components/Button';
import baseURL from '../../baseURL';

const UploadService = ({navigation}) => {
  const [service, setService] = useState({
    name: '',
    description: '',
    province: '',
    city: '',
    address: '',
    totalDay: '',
    totalPrice: 10000,
    user_id: '',
    isVerified: false,
  });
  const onChangeName = value => {
    setService({...service, name: value});
  };

  const onChangeDescription = value => {
    setService({...service, description: value});
  };

  const onChangeProvince = value => {
    setService({...service, province: value});
  };

  const onChangeCity = value => {
    setService({...service, city: value});
  };

  const onChangeAddress = value => {
    setService({...service, address: value});
  };

  const onChangeTotalDay = value => {
    setService({...service, totalDay: value});
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
          <Text style={styles.textHeader}>Unggah Jasa</Text>
        </View>
        <Text style={styles.textBody}>Foto Jasa</Text>
        <TouchableOpacity>
          <Image source={IMAGES.addImgService} style={styles.addImage} />
        </TouchableOpacity>
        <BassicTitle
          title="Judul"
          customContainer={styles.form}
          changeText={onChangeName}
        />
        <BassicTitle title="Harga Jasa" customContainer={styles.form} />
        <BassicTitle
          title="Durasi Penayangan"
          customContainer={styles.form}
          changeText={onChangeTotalDay}
        />
        <Text style={styles.textWarning}>per minggu</Text>
        <BassicTitle
          title="Deskripsi"
          customContainer={styles.form}
          customTextInput={styles.fieldInput}
          changeText={onChangeDescription}
        />
        <BassicTitle
          title="Provinsi"
          customContainer={styles.form}
          changeText={onChangeProvince}
        />
        <BassicTitle
          title="Kota"
          customContainer={styles.form}
          changeText={onChangeCity}
        />
        <BassicTitle
          title="Alamat"
          customContainer={styles.form}
          changeText={onChangeAddress}
        />
        <Button
          onPress={() =>
            navigation.navigate('PaymentConfirmationService', service)
          }
          title="Lanjut"
          customContainer={styles.button}
        />
      </ScrollView>
    </View>
  );
};

export default UploadService;
