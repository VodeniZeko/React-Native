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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});

export default HomeScreen;
