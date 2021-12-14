import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Text,
  Button,
} from "react-native";

function DeleteOrderButton({ orderNum }) {
  const [index, setIndex] = React.useState(orderNum);
  function test() {
    console.log(index);
  }
  return (
    <View>
      <TouchableOpacity onPress={test}>
        <View
          style={{
            backgroundColor: "red",
          }}
        >
          <Text style={{ alignSelf: "center", alignContent: "center" }}>
            Delete: {orderNum}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default DeleteOrderButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#f01d71",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
