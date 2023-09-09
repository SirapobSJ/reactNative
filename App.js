import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function FirstScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e6e6fa",
        },
      }}
    >
      <Stack.Screen name="FirstPage" component={FirstPage} />
    </Stack.Navigator>
  );
}

function SecondScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e6e6fa",
        },
      }}
    >
      <Stack.Screen name="SecondPage" component={SecondPage} />
    </Stack.Navigator>
  );
}

function ThirdScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ThirdPage" component={ThirdPage} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#fff0f5",
        },
        drawerStyle: {
          backgroundColor: "#fff0f5",
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="FirstDrawer"
        component={FirstScreenStack}
        options={{ drawerLabel: "First Page Option" }}
      />
      <Drawer.Screen
        name="SecondDrawer"
        component={SecondScreenStack}
        options={{ drawerLabel: "Second page Option" }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
