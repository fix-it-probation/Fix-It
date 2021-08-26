import React from 'react'
import { Image, View } from 'react-native';
import styles from './styles';
import IMAGES from '../../configs';
import { COLOR_WHITE } from '../../styles';

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('Home')
    }, 3000)
    return (
        <View style={{flex: 1, backgroundColor: COLOR_WHITE}}>
            <Image source={IMAGES.logo} style={styles.img} />
        </View>
    )
}

export default SplashScreen;
