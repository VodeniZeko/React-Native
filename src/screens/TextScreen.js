import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: 20 }}>your name</Text>
      <TextInput
        onChangeText={newName => setName(newName)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
      />
      {name ? (
        <Text>
          your name is:{" "}
          <Text style={{ color: "green", fontWeight: "bold" }}>{name}</Text>
        </Text>
      ) : null}
      <Text style={{ textAlign: "center", fontSize: 20 }}>your password</Text>
      <TextInput
        onChangeText={newPass => setPassword(newPass)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
      />
      {password ? (
        password.length < 7 ? (
          <Text style={{ color: "red" }}>
            password need to be 7 characters long.
          </Text>
        ) : null
      ) : null}
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
