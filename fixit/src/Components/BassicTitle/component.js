import React, {Component} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BassicTitle = ({label, customContainer, title, customTextInput, customTitle, changeText}) => {
  return (
    <View style={[styles.container, customContainer]}>
      <Text style={[styles.titleText, customTitle]}>{title}</Text>
      <TextInput 
        multiline={true}
        maxLength={400}
        editable={true} 
        style={[styles.input, customTextInput]} placeholder={label} onChangeText={changeText}  />
    </View>
  );
};

Component.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  customTextInput: PropTypes.object,
  customContainer: PropTypes.object,
  customTitle: PropTypes.object,
  changeText:  PropTypes.object
};

Component.defaultProps = {
  label: 'Field Text',
  title: 'Title Text',
  customContainer: null,
  customTextInput: null,
  customTitle: null,
  changeText: null
};

export default BassicTitle;
