import React, {Component} from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CardResult = ({customCard, result, title}) => {
  return (
    <View style={[styles.card, customCard]}>
      <Text style={styles.textResult}>{title}</Text>
      <View style={styles.cardResult}>
        <Text style={styles.result}>{result}</Text>
      </View>
    </View>
  );
};

Component.propTypes = {
  customCard: PropTypes.object,
  title: PropTypes.string,
  result: PropTypes.string,
};

Component.defaultProps = {
  customCard: null,
  title: 'Field',
  result: 'Field'
};

export default CardResult;
