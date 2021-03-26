import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Signin from '../pages/SignIn';
import ResetPassword from '../pages/ResetPassword';
import Home from '../pages/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      title: '',
      headerShown: true,
      headerStyle: { backgroundColor: '#e5e3dd' },
    }}
  >
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default Routes;
