import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import DeleteButton from "../DeleteOrderButton";
import firebase from "firebase";

function Order({ orderName, orderDrink, orderNum }) {
  const [selected, setSelected] = React.useState("");
  const [dataBaseRef, setdataBaseRef] = React.useState("");

  //function to delete item

  function convertRef() {
    const path = `orders/${selected}`;
    // setdataBaseRef(currentId);
    console.log(path);
    var removing = firebase.database().ref(path);
    removing.remove();
  }

  return (
    <View>
      <View>
        <View>
          <TouchableOpacity
            onPress={() => {
              setSelected(orderName);
              console.log(selected);
            }}
          >
            <View>
              <Text>
                OrderNumber: {orderNum}
                {"\n"}
                Name: {orderName}
                {"\n"}
                Drink:
              </Text>
              {orderDrink.map((item, index) => (
                <Text key={index} style={{ alignSelf: "auto" }}>
                  {"\t"}
                  {item}
                </Text>
              ))}
              <Text>
                __________________________________________________{"\n"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => convertRef()}>
            <View
              style={{
                backgroundColor: "red",
              }}
            >
              <Text>delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Order;
