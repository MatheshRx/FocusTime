import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../Components/RoundedButton';

export const Focus = ({ inApp }) => {
  const [tempItem, setTempItem] = useState(null);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}> What is your focus ?</Text>
        <View style={styles.inputWrap}>
          <TextInput
            mode="outlined"
            label="Focus"
            style={styles.textInput}
            onSubmitEditing={({ nativeEvent }) => setTempItem(nativeEvent.text)}
          />
          <RoundedButton
            title="+"
            onPress={() => inApp(tempItem) }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  text: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  inputWrap: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flexGrow: 1,
    marginRight: 10,
  },
});
