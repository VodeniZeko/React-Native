import React from "react";
import ImageDetails from "../component/ImageDetails";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const FriendList = () => {
  return (
    <View>
      <ImageDetails
        title="forest"
        source={require("../../assets/forest.jpg")}
      />
      <ImageDetails title="beach" source={require("../../assets/beach.jpg")} />
      <ImageDetails
        title="mountain"
        source={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

export default FriendList;
