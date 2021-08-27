import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import SMSVerifyCode from 'react-native-sms-verifycode';
import Button from '../../components/Button';
import Back from '../../components/Back';
import {COLOR_WHITE} from '../../styles';

const VerificationCode= ({navigation, email}) => {
  email = "kamu@gmail.com"
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <View style={{ flexDirection: 'row' }}>
        <Back custom={styles.backButton} />
        <Text style={styles.textIndicator}>5 dari 5</Text>
      </View>
      <Text style={styles.textHeader}>Verifikasi Email</Text>
      <Text style={styles.textBody}>Masukkan kode verifikasi yang dikirim ke</Text>
      <Text style={styles.textEmail}>{email}</Text>
      <SMSVerifyCode
        verifyCodeLength={4}
        containerPaddingVertical={10}
        containerPaddingHorizontal={50}
        containerBackgroundColor={COLOR_WHITE}
      />
      <View style={{flexDirection: 'row', marginTop: 60, marginLeft: 40,}}>
        <Text style={styles.textWarning}>Belum dapat kode? </Text>
        <Text onPress={() => navigation.navigate()}style={styles.textTry}>Kirim Ulang</Text>
      </View>
      <Button
        customContainer={styles.button}
        title="Lanjut"
        onPress={() => navigation.navigate('CreatePassCustomer', user)}
      />
    </View>
  );
};

export default VerificationCode;
