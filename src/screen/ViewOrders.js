import React, { useState } from "react";
import ItemBox from "../screen/listDisplay/workerOrderList";
import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native";
import data from "../../data";
const ViewOrders = () => {
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
          return <ItemBox data={item} handleDelete={() => deleteItem(index)} />;
        }}
      />
    </SafeAreaView>
  );
};

export default ViewOrders;
