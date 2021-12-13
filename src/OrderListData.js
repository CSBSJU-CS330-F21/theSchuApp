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
//import data from "../../data";
import firebase from "firebase";
import Order from "./components/Order";
import OrderList from "./screen/listDisplay/orderDisplay";

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
    console.log(orderList);
  });

firebase
  .database()
  .ref("orders")
  .on("value", function (snap) {
    //console.log("This is SNAP: " + snap + "SNAP ENDS HERE!!!");

    //console.log(typeof snap);
    snap.forEach(function (childnode) {
      var drinkNames = [];
      //console.log(childnode.val().parent);
      var cNode = childnode.val();
      names.push(cNode.displayName);
      index.push(index.length);
      orderNumber.push(cNode.orderNumber);
      for (var i = 0; i < cNode.cart.length; i++) {
        //console.log("THIS IS THE ORDER LIST OBJECT: " + orderList.toString() + "END");

        if (typeof cNode.cart[i].name === "string") {
          // console.log(
          // "Pushing into the drinks array: " + cNode.cart[i].falvors
          // );
          drinkNames.push(cNode.cart[i].name);
          // drinkNames.push(cNode.cart[i].falvors);
        }
      }
      //console.log("THIS IS THE DRINKS ARRAY: " + drinks+ "END");
      drinks.push(drinkNames);
    });
  });

function OrderListData() {
  //console.log(names);
  //console.log("This is the cart items: " + drinks);
  const dataList = index.map((i) => (
    <Order
      key={i}
      orderDrink={drinks[i]}
      orderName={names[i]}
      orderNum={orderNumber[i]}
    />
  ));

  return <View>{dataList}</View>;
}

export default OrderListData;

<FlatList
  data={orderList}
  renderItem={({ item, index }) => {
    return <OrderList data={item} />;
  }}
/>;
