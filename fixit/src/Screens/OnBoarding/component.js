import React from 'react';
import {
  SafeAreaView,
  Image,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Button from '../../components/Button';
import { COLOR_BASE_PRIMARY_MAIN, COLOR_FIELD, COLOR_WHITE } from '../../styles';
import styles from './styles';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../../assets/image/onBoarding1.png'),
    title: 'Save your money',
    subtitle: 'Sesuaikan budget pengeluaranmu, agar dapat menghemat lebih banyak uang.',
  },
  {
    id: '2',
    image: require('../../../assets/image/onBoarding2.png'),
    title: 'Choose the best',
    subtitle: 'Pilih mitra yang sesuai dengan kebutuhanmu.',
  },
  {
    id: '3',
    image: require('../../../assets/image/onBoarding3.png'),
    title: 'Repair your house',
    subtitle: 'Solusi untuk mengatasi kerusakan rumahmu, klik dan mitra akan datang.',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{alignItems: 'center', height: 256, width, backgroundColor: COLOR_FIELD}}>
      <Image
        source={item?.image}
        style={{ resizeMode: 'contain', margin: 30}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const Onboarding = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLOR_BASE_PRIMARY_MAIN,
                  borderRadius: 20,
                  bottom: 40,
                  width: 8  ,
                },
              ]}
            />
          ))}
        </View>
        <View style={{marginBottom: 20, alignSelf: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Button onPress={() => navigation.navigate('Login')} title="Login" customContainer={styles.buttonLogin} customText={styles.textLogin}/>
              <Button onPress={() => navigation.navigate('RegisterCustomer')} title="Daftar" customContainer={styles.buttonRegister} customText={styles.textRegister} />
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center', bottom: 28,}}>
              <Text>Ingin jadi mitra?</Text>
              <Text onPress={() => navigation.navigate('RegisterMitra')} style={{color: COLOR_BASE_PRIMARY_MAIN}}> Daftar Sekarang</Text>
            </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR_WHITE}}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Onboarding;