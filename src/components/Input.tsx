import React from 'react'
import { StyleSheet, StyleSheetProperties } from 'react-native'
import { TextInput } from 'react-native-paper'
import { InputType } from '../types'

export const Input = ({ label, value, setValue, security = false }: InputType) => {
  return (
    <TextInput
      label={label}
      mode="outlined"
      value={value}
      onChangeText={setValue}
      secureTextEntry={security}
      textColor='#ffffff'
      activeOutlineColor='#ffffff'
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#0c0f17',
  },
});