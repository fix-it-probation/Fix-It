import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import IMAGES from '../../configs';
import {COLOR_FIELD, COLOR_WHITE} from '../../styles';
import Button from '../../components/Button';
import {AuthContext} from '../../components/Context';
import baseURL from '../../baseURL';

const Profile = ({ name, number, email, navigation }) => {
  const [user, setUser] = useState({
    name: '',
    number: '',
    email: '',
  });

  const getData = async () => {
    try {
      const res = await baseURL.get('/users/profile');
      setUser({
        ...user,
        name: res.data['name'],
        number: res.data['telephone'],
        email: res.data['email'],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const {Logout} = useContext(AuthContext);
  const LogoutHandle = () => {
    Logout();
  };

  useEffect(() => {
    setTimeout(async () => {
      getData();
    }, 1000);
  }, []);

  return (
    <View style={{backgroundColor: COLOR_FIELD, flex: 1}}>
      <View style={{backgroundColor: COLOR_WHITE, height: 110}}>
        <Image source={IMAGES.avatar} style={styles.avatar} />
        <Text style={styles.textName}>{user.name}</Text>
        <Text style={styles.textBody}>{user.number}</Text>
        <Text style={styles.textBody}>{user.email}</Text>
      </View>
      <View style={{backgroundColor: COLOR_WHITE, height: 100, marginTop: 8,}}>
        <Text style={styles.textTitle}>Akun</Text>
        <TouchableOpacity
          onPress={() => navigation.push('AccountSecurity')}
          style={{flexDirection: 'row'}}>
          <Image source={IMAGES.edit} style={styles.Icon} />
          <Text style={styles.textEdit}>Ubah Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: COLOR_WHITE, height: 160, marginTop: 8,}} >
        <Text style={styles.textTitle}>Seputar Aplikasi</Text>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image source={IMAGES.star} style={styles.Icon} />
          <Text style={styles.textEdit}>Ulas Aplikasi ini</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', marginTop: 16}}>
          <Image source={IMAGES.safety} style={styles.Icon} />
          <Text style={styles.textEdit}>Pasang Iklan</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textVersion}>Version 1.0.0</Text>
      <Button
        title="Sign Out"
        customContainer={styles.button}
        onPress={LogoutHandle}
      />
    </View>
  );
};

export default Profile;
