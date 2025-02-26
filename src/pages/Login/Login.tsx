import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Input } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("----Login----");
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="facebook" size={20} color="#1877F2" />
            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={20} color="#EA4335" />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separator}>
          <Text style={styles.separatorText}>OR</Text>
        </View>

        <View style={styles.textInputGroup}>
          <Input
            label="Email"
            value={email}
            setValue={text => setEmail(text)}
          />
          <Input
            label="Password"
            value={password}
            setValue={text => setPassword(text)}
            security={true}
          />
        </View>

        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.registerLink}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
