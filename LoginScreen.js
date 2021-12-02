import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native';
import Login from './Login.js';
import OTP from './OTP.js';
export default function LoginScreen() {

    const [number, onChangeNumber, otpNumber] = useState(null);
        return (
          
          <>
          <View>
          <Text style={styles.text}>
            {"Login"}
            </Text>  
          </View>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeNumber={onChangeNumber}
                    value={number}
                    placeholder="phone number"
                    keyboardType="numeric" />
            </SafeAreaView>
            <View style={styles.button}>
                    <OTP />
            </View>
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeNumber={onChangeNumber}
                    value={otpNumber}
                    placeholder="one-time password"
                    keyboardType="numeric" />
            </SafeAreaView>
            <View style={styles.button}>
                    <Login />
            </View>
            </>
        );
}


const styles = StyleSheet.create({
  input: {
    height: 70,
    marginTop: 60,
    marginBottom: -10,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    paddingBottom: -10,
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    marginTop: 50,
    paddingBottom: -40,
    fontSize: 30
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    height: '15%',
    alignItems: 'center', 
  }
});
