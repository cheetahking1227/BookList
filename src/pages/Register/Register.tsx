import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Input } from '../../components';
import { styles } from './styles';

export const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleRegister = () => {
    console.log('-----Register-----');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.title}>Register</Text>
      <View style={styles.textInputGroup}>
        <Input
          label="Full Name"
          value={fullName}
          setValue={text => setFullName(text)}
        />
        <Input
          label="Email"
          value={email}
          setValue={text => setEmail(text)}
        />
        <Input
          label="Mobile Number"
          value={phone}
          setValue={text => setPhone(text)}
        />
        <Input
          label="Password"
          value={password}
          setValue={text => setPassword(text)}
        />
        <Input
          label="Confirm Password"
          value={confirmPass}
          setValue={text => setConfirmPass(text)}
        />
      </View>
      <View style={styles.registerButtonContainer}>
        <TouchableOpacity
          onPress={handleRegister}
          style={styles.registerButton}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsContainer}>
        <Text style={styles.terms}>
          By registering you agree to
          <Text style={styles.link}> Terms & Conditions</Text>
        </Text>
        <Text style={styles.terms}>
          and <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
}