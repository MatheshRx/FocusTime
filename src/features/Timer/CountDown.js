import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration, Platform } from 'react-native';
import { Timer } from './Timer';
import { ChangeCount } from './ChangeCount';
import { RoundedButton } from '../../Components/RoundedButton';

export const CountDown = ({ focusItem, timeOut, cancelFocus }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);

  const vibrate = () => {
    if (Platform === 'ios') {
      const interval = setInterval(Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };
  const onEnd = () => {
    setMinutes(0);
    setIsStarted(false);
    vibrate();
    setTimeout(() => timeOut(null), 10000);
  };
  const onchangeCount = (min) => {
    setMinutes(min);
    setIsStarted(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.timerWrap}>
          <Timer minutes={minutes} isPassed={!isStarted} onEnd={onEnd} />
        </View>
        <Text style={styles.title}> Focusing on : {focusItem} </Text>
      </View>
      <View style={styles.countWrap}>
        <ChangeCount changeCount={onchangeCount} />
      </View>
      <View style={styles.buttonWrap}>
        {isStarted ? (
          <RoundedButton
            title="Pause"
            size={100}
            onPress={() => setIsStarted(false)}
          />
        ) : (
          <RoundedButton
            title="Start"
            size={100}
            onPress={() => setIsStarted(true)}
          />
        )}
      </View>
      <View style={styles.cancelFocus}>
        <RoundedButton
          title="-"
          size={60}
          onPress={() => cancelFocus()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
  },
  timerWrap: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonWrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countWrap: {
    display: 'flex',
    flex: 0.3,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  main: {
    flex: 0.3,
  },
  cancelFocus: {
    flex: 0.5,
    paddingRight: 10,
    marginTop: 30,
    alignItems: "flex-end",
  },
});
