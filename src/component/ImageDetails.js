import React from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
const ImageDetails = ({ title, imgSource }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <Image source={imgSource} />
    </View>
  );
};

export default ImageDetails;
