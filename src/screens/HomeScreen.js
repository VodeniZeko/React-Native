import React from "react";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Welcome to my app</Text>
      <Button
        onPress={() => {
          alert("no no no");
        }}
        title="button"
      />
      <TouchableOpacity>
        <Text style={styles.buttonText}>see Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.buttonText}>see Images</Text>
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
