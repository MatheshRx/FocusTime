import React from 'react';
import {View, StyleSheet } from 'react-native';
import { RoundedButton } from '../../Components/RoundedButton';

export const ChangeCount = ({changeCount}) =>{
  return (
    <React.Fragment>
      <View> 
        <RoundedButton title="10" size={70} onPress={() => changeCount(10)}/>
      </View>
      <View> 
        <RoundedButton title="15" size={70} onPress={() => changeCount(15)}/>
      </View>
      <View> 
        <RoundedButton title="20" size={70} onPress={() => changeCount(20)}/>
      </View>
    </React.Fragment>
  )
}