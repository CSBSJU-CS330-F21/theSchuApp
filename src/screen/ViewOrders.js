import React, { useState } from "react";
import ItemBox from "../screen/listDisplay/workerOrderList";
import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native";
//import data from "../../data";
import firebase from "../../database/firebase-db";

const data = [
  {id: 1, name: 'a'},
  {id: 2, name: 'a'},
  {id: 3, name: 'a'},
  {id: 4, name: 'a'},
  {id: 5, name: 'a'},
  {id: 6, name: 'a'},
  {id: 7, name: 'a'},
  {id: 8, name: 'a'},
  {id: 9, name: 'a'},
  {id: 10, name: 'a'}, 
]

const ViewOrders = () => {

  // Declare a new list variable, which we'll call set
  const [lists, setLists] = useState(data);

  const deleteItem = (index) => {
    const arr = [...lists];
    //start remove postion index and only the first element
    arr.splice(index, 1);
    setLists(arr);
  };
  const addItem = () =>{
    const arr = [...lists];
    //start remove postion index and only the first element
    firebase.database().ref('coffee').on('value', function(snap)  {

      snap.forEach(function(childnodes){
        setLists([...arr,{
          id: lists.length + 1, name: "b"
        }])
      })
  })
  
  };
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <FlatList
        data={lists}
        renderItem={({ item, index }) => {
          return <ItemBox data={item} handleDelete={() => deleteItem(index)} />;
          console.log(lists);
        }}
      />
    </SafeAreaView>
  );
};

export default ViewOrders;