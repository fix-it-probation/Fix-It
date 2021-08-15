import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BassicTitle = ({label, customContainer, title, customTextInput, customTitle}) => {
  return (
    <View style={[styles.container, customContainer]}>
      <Text style={[styles.titleText, customTitle]}>{title}</Text>
      <TextInput style={[styles.input, customTextInput]} placeholder={label} />
    </View>
  );
};

Component.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  customTextInput: PropTypes.object,
  customContainer: PropTypes.object,
  customTitle: PropTypes.object,
};

Component.defaultProps = {
  label: 'Field Text',
  title: 'Title Text',
  customContainer: null,
  customTextInput: null,
  customTitle: null,
};

export default BassicTitle;
