import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Button,
  Alert,
} from "react-native";
//import data from "../../data";
import firebase from "firebase";
import Order from "../components/Order";

const ViewOrders = () => {
  const [selected, setSelected] = React.useState("");
  const path = `orders/${selected}`;
  var removing = firebase.database().ref(path);

  var index = [];
  var names = [];
  var drinks = [];
  var orderNumber = [];
  const orderList = [];

  firebase
    .database()
    .ref("orders")
    .on("value", (data) => {
      orderList.push(data.toJSON());
      // console.log(orderList);
    });

  firebase
    .database()
    .ref("orders")
    .on("value", function (snap) {
      snap.forEach(function (childnode) {
        var drinkNames = [];
        var cNode = childnode.val();
        names.push(cNode.displayName);
        index.push(index.length);
        orderNumber.push(cNode.orderNumber);
        for (var i = 0; i < cNode.cart.length; i++) {
          if (typeof cNode.cart[i].name === "string") {
            drinkNames.push(cNode.cart[i].name);
            // drinkNames.push(cNode.cart[i].falvors);
          }
        }
        drinks.push(drinkNames);
      });
    });

  function warning() {
    return Alert.alert("WARNING", "Are you sure you want to delete", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => removing.remove(),
        style: "destructive",
      },
    ]);
  }

  function OrderListData() {
    const dataList = index.map((i) => (
      <View style={styles.container}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setSelected(orderNumber[i]);
              console.log(selected);
            }}
          >
            <View>
              <Text style={styles.numText}> OrderNumber: {orderNumber}</Text>
              <Text style={styles.nameText}> Name: {names[i]}</Text>
              <Text>Drink:</Text>
              {drinks[i].map((item, index) => (
                <Text key={index} style={{ alignSelf: "auto" }}>
                  {"\t"}
                  {item}
                </Text>
              ))}
              <Text style={{ alignSelf: "flex-end" }}>
                __________________________________________________
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    ));

    return <View>{dataList}</View>;
  }
  return (
    <View>
      <View>
        {/* DELETE BUTTON */}
        <TouchableOpacity onPress={() => warning()}>
          <View style={{ backgroundColor: "red", height: 50 }}>
            <Text style={styles.deleteText}>Delete: {selected}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* LIST OF ORDER */}
      <ScrollView>
        <View>
          {/* <DeleteButton orderNum="{order}" /> */}
          <Text>{OrderListData()} </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewOrders;

const styles = StyleSheet.create({
  deleteText: { alignSelf: "center", fontSize: 25, fontWeight: "bold" },
  numText: { fontSize: 15, fontWeight: "bold" },
  nameText: { fontSize: 15, fontWeight: "bold" },
  container: {
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    marginVertical: 10,
    flex: 1,
  },
});
