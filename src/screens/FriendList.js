import React from "react";
import { FlatList, Text, StyleSheet } from "react-native";

const FriendList = () => {
  const friends = [
    { name: "Joe", age: 20 },
    { name: "Jake", age: 23 },
    { name: "Lisa", age: 30 },
    { name: "Kevin", age: 34 },
    { name: "Adam", age: 43 },
    { name: "Ian", age: 50 },
    { name: "Sarah", age: 31 },
    { name: "Ernesto", age: 22 },
    { name: "John", age: 44 }
  ];

  const styles = StyleSheet.create({
    text: {
      color: "gray"
    },
    mainText: {
      fontSize: 30,
      marginVertical: 50
    }
  });
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.mainText}>
            <Text style={styles.text}> my friend </Text> {item.name} is{" "}
            {item.age} <Text style={styles.text}> old. </Text>{" "}
          </Text>
        );
      }}
      keyExtractor={each => {
        each.name;
      }}
    />
  );
};

export default FriendList;
