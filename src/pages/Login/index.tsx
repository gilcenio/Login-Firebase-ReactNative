import React, {useState, useEffect} from 'react';
import { View, TextInput, TouchableOpacity, Text } from './styles';
import { useNavigation } from '@react-navigation/native';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import Hooks from '../../hooks'

const Signin: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function logar() {
    auth()
      .signInWithEmailAndPassword(email, password)

      .then(() => {
        Alert.alert('', 'Você está Logado', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      })

      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Erro', 'Esse endereço de e-mail é inválido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/user-disabled') {
          Alert.alert('Erro', 'E-mail fornecido foi desativado!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Erro', 'E-mail não cadastrado!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Erro', 'E-mail ou senha incorretos!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        // console.error(error);
      });
  return (
    <View>
      <Hooks />
      <Text
        title={'#000'}
        marginbottom={'30px'}
        fontsize={'36px'}
        margintop={''}
      >
        Log In
      </Text>

      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
        value={email}
      />
      <TextInput placeholder="Password"
        textContentType="password"
        onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        backgroundcolor={'#241C1C'}
        onPress={logar}
      >
        <Text
          title={'#fff'}
          marginbottom={''}
          fontsize={''}
          margintop={''}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        backgroundcolor={'#C8C4B9'}
        onPress={() => navigation.navigate('Signin')}>
        <Text
          title={'#fff'}
          marginbottom={''}
          fontsize={''}
          margintop={''}
        >
          SIGN UP
        </Text>
      </TouchableOpacity>
      <Text
        title={''}
        marginbottom={''}
        fontsize={''}
        margintop={'12px'}
        onPress={() => navigation.navigate('ResetPassword')}
      >
        Redefinir Senha?
      </Text>
    </View>
  );
};

export default Signin;
