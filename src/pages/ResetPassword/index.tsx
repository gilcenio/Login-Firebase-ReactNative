import React,{useState} from 'react';
import { View, TextInput, TouchableOpacity, Text } from './styles';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

const Signin: React.FC = () => {
  const [email, setEmail] = useState('');

  function resete() {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert('E-mail de recuperação enviado para', email, [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Erro', 'Endereço de e-mail não é válido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/missing-android-pkg-name') {
          Alert.alert('Erro', 'aplicativo precisar ser instalado!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/missing-continue-uri') {
          Alert.alert('Erro', 'Um URL de continuação deve ser fornecido na solicitação!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/missing-ios-bundle-id') {
          Alert.alert('Erro', 'Um iOS Bundle ID deve ser fornecido se um ID da App Store for fornecido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/invalid-continue-uri') {
          Alert.alert('Erro', 'O URL de continuação fornecido na solicitação é inválido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/unauthorized-continue-uri') {
          Alert.alert('Erro', 'Coloque o domínio na lista de permissões no console do Firebase!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('Erro', 'Nenhum usuário correspondente ao endereço de e-mail!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        // console.error(error);
      });
  }

  return (
    <View>
      <Text title={'#000'} marginbottom={'30px'} fontsize={'36px'}>
        Reset Password
      </Text>
      <TextInput
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
        value={email}
      />
      <TouchableOpacity
        backgroundcolor={'#241C1C'}
        onPress={resete}
      >
        <Text
          title={'#fff'}
          marginbottom={''}
          fontsize={''}
        >
          REQUEST RESET
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
