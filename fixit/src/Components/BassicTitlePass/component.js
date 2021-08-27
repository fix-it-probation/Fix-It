import React, {Component, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BassicTitlePass = ({label, customContainer, title, customTextInput, customTitle, changeText}) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true)

  return (
    <View style={[styles.container, customContainer]}>
      <Text style={[styles.titleText, customTitle]}>{title}</Text>
      <TextInput secureTextEntry={visible} style={[styles.input, customTextInput]} placeholder={label} onChangeText={changeText}>
      </TextInput>
      <TouchableOpacity style={styles.btnEye} onPress={() => 
        {setVisible(!visible) 
        setShow(!show)}}>
         <Image source={(show === false) ? require('../../../assets/image/eyeActive.png') : require('../../../assets/image/eyeInactive.png')} />
      </TouchableOpacity>
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

export default BassicTitlePass;
