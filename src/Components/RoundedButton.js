import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const RoundedButton = ({
  buttonStyle = {},
  textStyle = {},
  size = 50,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).button, buttonStyle]}>
      <Text style={[styles(size).text, textStyle]} onPress={props.onPress}>
        {' '}
        {props.title}{' '}
      </Text>
    </TouchableOpacity> 
  );
};

const styles = (size) =>
  StyleSheet.create({
    button: {
      borderColor: '#fff',
      borderRadius: 70,
      width: size,
      height: size,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 30,
      color: '#29539b',
    },
  });
