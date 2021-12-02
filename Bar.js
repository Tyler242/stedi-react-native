import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppName from './AppName';
import Setting from './Setting';
import Login from './login.js';

function Bar() {
  return (
    <View style={styles.bar}>
      <AppName />
      <Setting />
      <Login />
    </View>
  );
}

export default Bar;

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    backgroundColor: 'green',
    height: '15%',
    alignItems: 'center',
  },
});
