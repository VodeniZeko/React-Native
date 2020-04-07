import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <View>
      <Button
        title="increase"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title="decrease"
        onPress={() => {
          setCount(count - 1);
        }}
      />
      <Text style={style.text}>Current count: </Text>
      <Text style={style.number}>{count} </Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5
  },
  number: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 30
  }
});
export default Counter;
