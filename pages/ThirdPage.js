import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

function ThirdPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Third Page of the app{"\n"}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Second Page"
        onPress={() => navigation.navigate("SecondPage")}
      />
      <Button
        title="Reset Navigator to First Page"
        onPress={() => navigation.navigate("FirstPage")}
      />
    </View>
  );
}
export default ThirdPage;

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
