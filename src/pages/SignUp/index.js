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
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const { signed, signUp } = useAuth();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/icon.png')} />
      <TextInput
        mode="flat"
        style={styles.input}
        autoCorrect={false}
        autoCapitalize={"none"}
        textContentType={"name"}
        label={"Digite seu nome"}
        placeholder={"Nome"}
        value={name}
        onChangeText={name => setName(name)}
      />
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
        autoCorrect={false}
        autoCapitalize={"none"}
        textContentType={"password"}
        label={"Digite sua senha"}
        placeholder={"Senha"}
        value={password}
        onChangeText={password => setPassword(password)}
      />
      <Button
        mode="contained"
        style={styles.submit}
        color={Theme.colors.primary}
        onPress={() => {
          setLoading(true);
          signUp(name, email, password).then(() => setLoading(!loading));
        }}
      >Sign Up</Button>
    </View>
  );
}