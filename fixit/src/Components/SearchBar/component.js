import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import IMAGES from '../../configs';

const SearchBar = ({label, customContainer, customTextInput}) => {
  return (
    <View style={[styles.container, customContainer]}>
      <Image source={IMAGES.iconSearch} style={styles.image} />
      <TextInput style={[styles.input, customTextInput]} placeholder={label} />
    </View>
  );
};

Component.propTypes = {
  label: PropTypes.string,
  customTextInput: PropTypes.object,
  customContainer: PropTypes.object,
};

Component.defaultProps = {  
  label: 'Field Text',
  customContainer: null,
  customTextInput: null,
};

export default SearchBar;
