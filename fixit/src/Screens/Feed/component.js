import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import CardFeed from '../../components/CardFeed';
import IMAGES from '../../configs';
import {COLOR_WHITE} from '../../styles';
import styles from './styles';

const Home = ({desc}) => {
  desc = 'Lorem ipsum dolor sit amet, consectetur.';
  return (
    <View style={{backgroundColor: COLOR_WHITE, flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.textHeader}>Feed</Text>
        <CardFeed
          images={IMAGES.avatar}
          title="Muhammad Ibnu"
          desc={desc}
          customCard={styles.card}
        />
        <CardFeed
          images={IMAGES.avatar}
          title="Muhammad Ibnu"
          desc={desc}
          customCard={styles.card}
        />
        <CardFeed
          images={IMAGES.avatar}
          title="Muhammad Ibnu"
          desc={desc}
          customCard={styles.card}
        />
        <CardFeed
          images={IMAGES.avatar}
          title="Muhammad Ibnu"
          desc={desc}
          customCard={styles.card}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
