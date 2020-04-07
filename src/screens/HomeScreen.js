import React from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const HomeScreen = props => {
  const nav = props.navigation.navigate;
  return (
    <View>
      <Text style={styles.text}>Welcome to my app</Text>
      <Button
        onPress={() => {
          alert("no no no");
        }}
        title="button"
      />
      <TouchableOpacity
        onPress={() => {
          nav("List");
        }}
      >
        <Text style={styles.buttonText}>see Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          nav("Images");
        }}
      >
        <Text style={styles.buttonText}>see Images</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          nav("Counter");
        }}
      >
        <Text style={styles.buttonText}>go count</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  },
  buttonText: {
    color: "blue",
    textAlign: "center",
    padding: 5
  }
});

export default HomeScreen;
