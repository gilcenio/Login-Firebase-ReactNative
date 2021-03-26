import React, {useState} from 'react';
import { View, TextInput, TouchableOpacity, Text } from './styles';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const Signin: React.FC = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function createUser() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('', 'Usuário cadastrado com sucesso!', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Erro', 'Endereço de e-mail não for válido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Erro', 'Esse endereço de e-mail é inválido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/operation-not-allowed') {
          Alert.alert('Erro', 'E-mail ou senha desativada!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/weak-password') {
          Alert.alert('Erro', 'Senha não é forte o suficiente!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        // console.error(error);
      });
  }

  return (
    <View>
      <Text title={'#000'} marginbottom={'30px'} fontsize={'36px'}>
        Sign Up
      </Text>
      <TextInput placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        textContentType="password"
        onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        backgroundcolor={'#241C1C'}
        onPress={createUser}
      >
        <Text title={'#fff'}
          marginbottom={''}
          fontsize={''}
        >
          SIGN UP
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        backgroundcolor={'#C8C4B9'}
        onPress={() => navigation.navigate('Login')}
      >
        <Text title={'#fff'} marginbottom={''} fontsize={''}>lOG IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
