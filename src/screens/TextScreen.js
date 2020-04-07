import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        onChangeText={newName => setName(newName)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
      />
      <Text>your name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});
export default TextScreen;
