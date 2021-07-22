import React, {Component, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const BassicTitle = ({customInput, label, customLabel, customContainer}) => {
  return (
    <View style={[styles.container, customContainer]}>
      <Text style={[styles.labelText, customLabel]}>{label}</Text>
      <TextInput style={[styles.input, customInput]} />
    </View>
  );
};

Component.propTypes = {
  label: PropTypes.string,
  labelText: PropTypes.object,
  customLabel: PropTypes.object,
  customInput: PropTypes.object,
  customContainer: PropTypes.object,
};

Component.defaultProps = {
  label: 'Field Input',
  labelText: null,
  customLabel: null,
  customInput: null,
  customContainer: null,
};

export default BassicTitle;
