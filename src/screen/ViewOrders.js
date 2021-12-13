import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Text,
  Button,
  ScrollView,
} from "react-native";
//import data from "../../data";
import firebase from "../../database/firebase-db";
import Order from "../components/Order";
import FlatButton from "../DeleteOrderButton";
import OrderListData from "../OrderListData";
import DeleteButton from "../DeleteOrderButton";

const ViewOrders = ({ order }) => {
  // Declare a new list variable, which we'.ll call set
  // const [lists, setLists] = useState([]);

  // const deleteItem = () => {
  //   const arr = [...lists];
  //   //start remove postion index and only the first element
  //   arr.splice(0, 1);
  //   setLists(arr);
  // };
  // const addItem = () =>{
  //   const arr = [...lists];
  //   //start remove postion index and only the first element
  //   firebase.database().ref('coffee').on('value', function(snap)  {

  //     snap.forEach(function(childnodes){
  //       setLists([...arr,{
  //         id: lists.length + 1, name: "b"
  //       }])
  //     })
  // })

  // };

  return (
    <ScrollView>
      <View>
        {/* <DeleteButton orderNum="{order}" /> */}
        <Text>{order}</Text>
        <OrderListData />
      </View>
    </ScrollView>
  );
};

export default ViewOrders;
