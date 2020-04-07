import React from "react";
import ImageDetails from "../component/ImageDetails";
import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";

const FriendList = () => {
  return (
    <View>
      <ImageDetails
        title="forest"
        imgSource={require("../../assets/forest.jpg")}
      />
      <ImageDetails
        title="beach"
        imgSource={require("../../assets/beach.jpg")}
      />
      <ImageDetails
        title="mountain"
        imgSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

export default FriendList;
