import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import Back from '../../components/Back';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';
import BassicTitlePass from '../../components/BassicTitlePass';

const AccountSecurity = ({navigation}) => {

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'row' }}>
        <Back onPress={() => navigation.goBack()} custom={styles.backButton} />
        <Text style={styles.textHeader}>Ubah Profile</Text>
      </View>
      <Image source={IMAGES.avatar} style={styles.avatar} />
        <BassicTitlePass
          title="Password"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
        />
        <BassicTitlePass
          title="Konfirmasi Password"
          customContainer={styles.inputField}
          customTextInput={styles.fieldInput}
        />
        <Button
          customContainer={styles.button}
          title="Simpan"
          onPress={ () => 
            navigation.navigate('Login')
          }/>
      </ScrollView>
    </View>
  );
};

export default AccountSecurity;
