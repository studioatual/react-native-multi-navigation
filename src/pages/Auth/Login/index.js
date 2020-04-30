import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import { AuthContext } from '../../../contexts/auth';
import styles from './styles';

export default function Login() {
  const navigation = useNavigation();
  const { logIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Recover')}
      >
        <Text style={styles.btnText}>Recover</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={logIn}>
        <Text style={{ color: '#000' }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
