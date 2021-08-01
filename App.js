import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Focus } from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import { CountDown } from './src/features/Timer/CountDown';

const status = {
  completed: 1,
  cancelled: 2,
};
export default function App() {
  const [focusItem, setFocusItem] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistory = (foucusName, status) => {
    setFocusHistory([...focusHistory, { key: String(Math.random()), foucusName, status }]);
  };
  const saveHistory = async () => {
    try {
      await AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };

  const loadHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');
      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadHistory();
  }, []);
  
  useEffect(() => {
    saveHistory();
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      {focusItem ? (
        <CountDown
          focusItem={focusItem}
          timeOut={() => {
            addFocusHistory(focusItem, status.completed);
            setFocusItem(null);
          }}
          cancelFocus={() => {
            addFocusHistory(focusItem, status.cancelled);
            setFocusItem(null);
          }}
        />
      ) : (
        <React.Fragment>
          <Focus inApp={setFocusItem} />
          <FocusHistory
            focusHistoryArray={focusHistory}
            clearHistory={() => setFocusHistory([])}
          />
        </React.Fragment>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'rgb(23,224,250)',
  },
});
