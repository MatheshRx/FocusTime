import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const minuteToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);
export const Timer = ({ minutes, isPassed, onEnd }) => {
  const [millis, setMillis] = useState(minuteToMillis(minutes));
  const interval = useRef(null);

  const countDown = () => {
    setMillis(
      (time) => {
        if (time === 0) {
          return time;
        }
        const timeLeft = time - 1000;
        return timeLeft;
      }
    );
  };

  // const countDown = () => {
  //   setMillis((time) => time === 0 ? time : time - 1000);
  // };
  
  useEffect( () =>{
    millis === 0 && onEnd();
    
  }, [millis]);

  useEffect( () =>{
    setMillis(minuteToMillis(minutes));
  }, [minutes]);
  
  useEffect(() => {
    if(isPassed) {
      interval.current &&  clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPassed]);
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {formatTime(minute)}:{formatTime(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#09c7fb',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 40,
    color: '#fff',
  },
});
