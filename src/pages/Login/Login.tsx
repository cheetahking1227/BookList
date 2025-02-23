import React from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';

export const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Image style={styles.logoImage} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
        <Ionicons name="chevron-forward" color="red" size={24} />
      </View>
    </SafeAreaView>
  );
}
