import React from 'react';
import {Button, Text} from 'react-native';
import {View} from './styles';
import Hooks from '../../hooks'
import auth from '@react-native-firebase/auth';

const Home: React.FC= () => {

  function logoff() {
    auth()
      .signOut()

      .then(() => console.log('User signed out!'));
  }

  return(
    <View>
      <Hooks />
      <Text>Deu Certo</Text>
      <Button title="Logoff" onPress={logoff} />
    </View>
  );
};

export default Home;
