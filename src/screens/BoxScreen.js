import React from "react";

import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>box 1</Text>
      <Text style={styles.text} style={{ marginTop: 1 }}>
        box 2
      </Text>
      <Text style={styles.text}>box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: "flex-end",
    flexDirection: "row",
    height: 800,
    width: 1000,
    alignItems: "flex-start"
  },
  text: {
    borderWidth: 1,
    borderColor: "red",
    margin: 20,
    width: 100,
    height: 100
  }
});
export default BoxScreen;
