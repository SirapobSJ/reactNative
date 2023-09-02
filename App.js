import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName='First'
       screenOptions={{
        headerStyle: {
          backgroundColor: '#008b8b'
        },
        headerTintColor: '#ffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
       }}
      >
        <Stack.Screen 
        name='FirstPage' 
        component={FirstPage} />
        <Stack.Screen
        name='SecondPage'
        component={SecondPage}/>
        <Stack.Screen
        name='ThirdPage'
        component={ThirdPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 16,
  },
});
