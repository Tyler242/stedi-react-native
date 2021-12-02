import { CurrentRenderContext } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoginData() {
  return (
    <>
      <View>
        <Text style={styles.text}>{'Login'}</Text>
      </View>
    </>
  );
}


const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: 50,
        paddingBottom: -40,
        fontSize: 30
    },
});