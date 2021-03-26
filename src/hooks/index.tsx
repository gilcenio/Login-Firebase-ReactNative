import React, { useState, useEffect } from 'react';
import { View, Text, } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

  function LoginApp() {
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) {;
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
      navigation.navigate('Login')
    }

    if (user) {
      navigation.navigate('Home')
    }

    return (
      <>
        {/* <Text>Welcome {user.email}</Text> */}
      </>
    );
  }

export default LoginApp;
