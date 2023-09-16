import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed</Text>
    </View>
  );
}

function Proflie() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Proflie</Text>
    </View>
  );
}

function Notification() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notification</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle = {{fontSize: 12}}
      style = {{backgroundColor: 'tometo'}}

      >
      <Tab.Screen name="Feed" component={Feed} options={{
        tabBarLabel:'Home',
        tabBarIcon: ({color})=>(
          <MaterialCommunityIcons name='home' color={color} size={26}/>

        )
      }}/>
      <Tab.Screen name="Notification" component={Notification} options={{
        tabBarLabel:'Update',
        tabBarIcon: ({color})=>(
          <MaterialCommunityIcons name='bell' color={color} size={26}/>
        )
      }}/>
      <Tab.Screen name="Proflie" component={Proflie} options={{
        tabBarLabel:'Proflie',
        tabBarIcon: ({color})=>(
          <MaterialCommunityIcons name='account' color={color} size={26}/>
        )
      }}/>

    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
