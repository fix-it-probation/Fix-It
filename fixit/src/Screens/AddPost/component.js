import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import IMAGES from '../../configs';
import styles from './styles';

const AddPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 32, marginLeft: 34}}>
        <Image source={IMAGES.close} />
        <Text style={styles.textHeader}>New Post</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('UploadService')}
          style={styles.card}>
          <Text style={styles.textCard}>Jasa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('UploadFeed')}
          style={styles.card}>
          <Text style={styles.textCard}>Feed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPost;
