import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <TouchableOpacity onPress={() => setColors([...colors, randomRgb()])}>
        <Text style={styles.btn}>Add a Color</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={each => each}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 1000,
                marginTop: 5,
                backgroundColor: item
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};
const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    textAlign: "center"
  }
});
export default ColorScreen;
