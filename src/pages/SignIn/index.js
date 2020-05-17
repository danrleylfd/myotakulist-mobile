import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { useAuth } from '../../contexts/auth';
import getStyles from '../../global/styles/auth';

export default function SignIn() {
  const Theme = useTheme();
  const styles = getStyles();
  const [loading,setLoading] = useState(false);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const { signed, signIn } = useAuth();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/icon.png')} />
      <TextInput
        mode="flat"
        style={styles.input}
        autoCorrect={false}
        autoCapitalize={"none"}
        label={"Digite seu email"}
        placeholder={"E-mail"}
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        mode="flat"
        style={styles.input}
        secureTextEntry={true}
        label={"Digite sua senha"}
        placeholder={"Senha"}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Button
        mode="contained"
        loading={loading}
        style={styles.submit}
        color={Theme.colors.primary}
        onPress={() => {
          // setLoading(true);
          signIn(email, password)//.then(() => setLoading(!loading));
        }}
      >Sign In</Button>
    </View>
  );
}