import React, { useState } from "react";

import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    Button,
    Modal,
    TouchableOpacity,
    Alert,
    Pressable,
  } from "react-native";

export default function Products({addToCart}){
    const [products] = useState([
        {
          name: "Black Cofeee",
          price: "3.99",
        },
        {
          name: "The Senate",
          price: "10.99",
        },
      ]);
      
    return(
        <>
        <Text>Products:</Text>
        {products.map((product, index) => (
          <View key={index}>
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
  
            <Button onPress={() => addToCart(product)} title="button">
              Add to cart
            </Button>
          </View>
        ))}{" "}
      </>
    )
}