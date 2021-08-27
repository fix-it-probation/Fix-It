import React from 'react';
import {View, Text, Image} from 'react-native';
import CardAdmin from '../../components/CardAdmin/component';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';
import styles from './styles';

const HomeAdmin = ({navigation}) => {
  const [label, setLabel] = useState({
    mitra: '',
    feed: '',
  });

  const GetPendingService = async () => {
    try {
      const res = await baseURL.get('/services/pending');
      const dataPendingMitra = res.data[0]['Verifikasi Mitra'];
      setLabel({
        ...label,
        mitra: dataPendingMitra,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const GetPendingFeed = async () => {
    try {
      const res = await baseURL.get('/feeds/pending');
      const dataPendingFeed = res.data[0]['Ads Verification'];
      setLabel({
        ...label,
        feed: dataPendingFeed,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const GetPending = () => {
    GetPendingFeed();
    GetPendingService();
  };
  useEffect(() => {
    setTimeout(() => {
      GetPending();
    }, 10);
  }, []);

  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <View style={styles.card}>
        <Image source={IMAGES.avatar} style={styles.avatar} />
        <Text style={styles.textProfile}>Admin</Text>
      </View>
      <Text style={styles.textHeader}>Penting hari ini</Text>
      <Text style={styles.textBody}>
        Aktivitas yang perlu kamu pantau untuk jaga kepuasan user
      </Text>
      <View style={{flexDirection: 'row'}}>
        <CardAdmin
          onPress={() => navigation.navigate('VerifyMitra')}
          images={IMAGES.verifyMitra}
          title="Verifikasi Mitra"
          label={label.mitra}
          customContainer={styles.cardMitra}
        />
        <CardAdmin
          onPress={() => navigation.navigate('VerifyFeed')}
          images={IMAGES.verifyFeed}
          title="Verifikasi Feed"
          label={label.feed}
          customContainer={styles.cardFeed}
        />
      </View>
    </View>
  );
};

export default HomeAdmin;
