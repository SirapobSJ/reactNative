import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";

function SecondPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is Second Page of the app{"\n"}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Second Page...Again"
        onPress={() => navigation.push("SecondPage")}
      />
      <Button
        title="Go to First Page"
        onPress={() => navigation.navigate("FirstPage")}
      />
      <Button
        title="Go to Third Page"
        onPress={() => navigation.navigate("ThirdPage")}
      />
    </View>
  );
}
export default SecondPage;

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
