import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { TextInput } from './Styles';

const App: React.FC = () => {
  function LoginApp() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    }

    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);

    if (initializing) {
      return null;
    }

    if (!user) {
      return (
        <View>
          <Text>Login</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Welcome {user.email}</Text>
      </View>
    );
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function createUser() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // console.log('User account created & signed in!');
        Alert.alert('Alert Title', 'Conta de usuário criada e conectada!', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // console.log('That email address is already in use!');
          Alert.alert('Alert Title', 'Esse endereço de email já esta em uso!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        if (error.code === 'auth/invalid-email') {
          // console.log('That email address is invalid!');
          Alert.alert('Alert Title', 'Esse endereço de e-mail é inválido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }
        // console.error(error);
      });
  }

  function logar() {
    auth()
      .signInWithEmailAndPassword(email, password)

      .then(() => {
        Alert.alert('Alert Title', 'Você está Logado', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      })

      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'Esse endereço de e-mail é inválido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/user-disabled') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail fornecido foi desativado.', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/user-not-found') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail não cadastrado', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/wrong-password') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail ou senha incorretos', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        // console.error(error);
      });
  }

  function passwordReset() {
    auth()
      .confirmPasswordReset(email, password)

      .then(() => {
        Alert.alert('Alert Title', 'Você está Logado', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      })

      .catch(error => {
        if (error.code === 'auth/expired-action-code') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'Esse endereço de e-mail é inválido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/invalid-action-code') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail fornecido foi desativado.', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/user-disabled') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail não cadastrado', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/user-not-found') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail ou senha incorretos', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        // console.error(error);
      });
  }

  function resete() {
    auth()
      .sendPasswordResetEmail(email)

      .then(() => {
        Alert.alert('Alert Title', 'Você está Logado', [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      })

      .catch(error => {
        if (error.code === 'auth/expired-action-code') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'Esse endereço de e-mail é inválido!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/invalid-action-code') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail fornecido foi desativado.', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/user-disabled') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail não cadastrado', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        if (error.code === 'auth/user-not-found') {
          // console.log('That email address is already in use!');

          Alert.alert('Alert Title', 'E-mail ou senha incorretos', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
        }

        // console.error(error);
      });
  }

  function logoff() {
    auth()
      .signOut()

      .then(() => console.log('User signed out!'));
  }

  function anonymous() {
    auth()
      .signInAnonymously()

      .then(() => {
        console.log('User signed in anonymously');
      })

      .catch(error => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
        }

        console.error(error);
      });
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <LoginApp />
      <Button title="Create User" onPress={createUser} />
      <Button title="Logoff" onPress={logoff} />
      <Button title="Entrar como Anonimo" onPress={anonymous} />
      <TextInput
        placeholder={'email'}
        textContentType="emailAddress"
        onChangeText={(text: React.SetStateAction<string>) => setEmail(text)}
        value={email}
      />

      <TextInput
        style={{}}
        placeholder={'password'}
        textContentType="password"
        onChangeText={(text: React.SetStateAction<string>) => setPassword(text)}
        value={password}
      />

      <Text>{password}</Text>

      <Button title="Fazer Login" onPress={logar} />
      <Button title="Reset Password" onPress={passwordReset} />
      <Button title="Reset" onPress={resete} />
    </View>
  );
};

export default App;
