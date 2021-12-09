import React from "react";
import { SafeAreaView, TouchableOpacity, View, StyleSheet, FlatList, Text, Button } from "react-native";
//import data from "../../data";
import firebase from "firebase";
import Order from "./components/Order"

var index = [];
var names = [];
var drinks = [];
const orderList = []



firebase.database().ref('orders').on('value', function(snap)  {
  //console.log("This is SNAP: " + snap + "SNAP ENDS HERE!!!");
  var orderDrinks = "";
  var orderName = "";
  //console.log(typeof snap);
  snap.forEach(function(childnode){
    var drinkNames = [];
    //console.log(childnode.val().parent);
    var cNode = childnode.val();
    names.push(cNode.displayName);
    index.push(index.length);
    for(var i = 0; i < cNode.cart.length; i++){
      //console.log("THIS IS THE ORDER LIST OBJECT: " + orderList.toString() + "END");

      if(typeof cNode.cart[i].name === 'string'){
        //console.log("Pushing into the drinks array: " + cNode.cart[i].name)
        drinkNames.push(cNode.cart[i].name);
      }
      
      

    }
    //console.log("THIS IS THE DRINKS ARRAY: " + drinks+ "END");
    drinks.push(drinkNames);
    // setList([...list, {
    //   id: list.length,
    //   name: cNode.displayName,
    //   drinks: drinkNames,
    // }])
    // orderList.push([{
    //   name: cNode.displayName,
    //   drink: {for}
    // }])
    // console.log(cNode);
    // for(var i = 0; i < cNode.cart.length; i++){
    //   "name: " + console.log(cNode.cart[i].name)
    //   "flavor: " + console.log(cNode.cart[i].falvors)
    // }
    // console.log(cNode.displayName + 
    //   "\nDrinks: " + cNode.cart[cartNumber].name + 
    //   "\nFlavor: " + cNode.cart[6].falvors);
  })
})

// const GetCoffeeOne = () => {
//   var name = '';
//   var flavors = '';
//   var count = 0;
//   firebase.database().ref('coffee/001').on('value', (data) => {
//     name = data.toJSON().name;
//     flavors = data.toJSON().flavors;
//   })

function OrderListData(){
  //console.log(names);
  //console.log("This is the cart items: " + drinks);
  const dataList = index.map(i => <Order key={i} orderDrink={drinks[i]} orderName={names[i]}/>)
  
  return(
  <View>            
    {dataList}
  </View>
  )
  
}




export default OrderListData;



