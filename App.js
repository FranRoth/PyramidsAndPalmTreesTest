import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./app/screens/HomeScreen";
import PyramidAndPalmTreesTest from "./app/screens/PyramidsAndPalmTreesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='PyramidsAndPalmTreesScreen'
          component={PyramidAndPalmTreesTest}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
