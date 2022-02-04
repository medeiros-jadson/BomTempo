import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from 'screens/SignIn'

const Stack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
    </Stack.Navigator>
  );
}

export default AuthRoutes;
