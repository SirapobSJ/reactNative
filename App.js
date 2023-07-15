import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cat from "./components/cat";
import CustomText from "./components/CustomText";

export default function App() {
  return (
    <View style = {styles.container}> 
      {/* <ViewBoxesWithColorAndText/> */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      <CustomText/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex:1,   
     justifyContent:'center',    
     alignItems:'center'   
  }
 })

