// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from "./screens";

const theme={
  ...DefaultTheme,
  color: {
    ...DefaultTheme.colors,
    border: "transparent"
  }
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions= {{
            headerShown: false
        }}
            initialRouteName={'Home'}
        >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;