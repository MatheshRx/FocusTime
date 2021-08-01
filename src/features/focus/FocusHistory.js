import React from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { RoundedButton } from '../../Components/RoundedButton';

const History = ({ item, index }) => {
  return <Text style = { styles.history(item.status) } > { item.foucusName } </Text>;
};
export const FocusHistory = ({ focusHistoryArray, clearHistory }) => {
  return (
    <SafeAreaView style={styles.main}>
      {!!focusHistoryArray.length && (
        <React.Fragment>
          <Text style={styles.text}>Focus History</Text>
          <FlatList
            style={{ flex: 1 }}
            data={focusHistoryArray}
            renderItem={History}
          />
          <RoundedButton size={90} title="Clear" onPress={() => clearHistory() }/>
        </React.Fragment>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    padding: 8,
    fontSize: 40,
  },
  history: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: 30,
  }),
});
