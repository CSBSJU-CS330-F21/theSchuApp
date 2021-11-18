import React, { useState } from "react";
import CartOrder from "./listDisplay/cartOrder";
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import data from "../../drinkData";
// import { SwipeListView } from "react-native-swipe-list-view";
// import { COLORS, icons } from "../../constants";
const ReviewDetails = ({ navigation }) => {
  // Declare a new list variable, which we'll call set
  const [lists, setLists] = useState(data);

  const deleteItem = (index) => {
    const arr = [...lists];
    //start remove postion index and only the first element
    arr.splice(index, 1);
    setLists(arr);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={lists}
        renderItem={({ item, index }) => {
          return (
            <CartOrder data={item} handleDelete={() => deleteItem(index)} />
          );
        }}
      />
      {/* Show total cost of all drinks */}
      <View>
        <Text>Total Cost: </Text>
      </View>
      {/* Order button and PickUp Time Selection*/}
      <View
        style={{
          padding: 5,
          alignItems: "center",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: 200,
            height: 50,
            backgroundColor: "orange",
            alignItems: "center",
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
          }}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text>Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 125,
            height: 50,
            backgroundColor: "orange",
            alignItems: "center",
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
          }}
        >
          <Text>PickUp Time</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ReviewDetails;
