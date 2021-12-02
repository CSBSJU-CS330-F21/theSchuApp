import React, { useState } from "react";
import { render } from "react-dom";
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
import firebase from "../../../database/firebase-db";
import Coffee from "../../../Data/Coffee";
import Products from "../Products";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

export default function CoffeeTest({ navigation }) {
  const BottomTab = createBottomTabNavigator();
  const PAGE_PRODUCTS = "products";
  const PAGE_CART = "cart";
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
 
  // appends cart array 
  const addToCart = (product) => {
    console.log("we are in");
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };


  const renderCart = () => (
    <>
      <Text>Cart:</Text>
      {cart.map((product, index) => (
        <View key={index}>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
          <Button title="remove" onPress={() => removeFromCart(product)}>
            Remove
          </Button>
        </View>
      ))}
    </>
  );

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <ScrollView>
      <View>
        <Text>{page === PAGE_PRODUCTS && <Products addToCart = {addToCart}/>}</Text>
        <Text>{page === PAGE_CART && renderCart()}</Text>
      </View>
      <View>
        <Button onPress={() => navigateTo(PAGE_CART)} title="cart" />
        <Text>{cart.length}</Text> 
      </View>
      <View>
        <Button onPress={() => navigateTo(PAGE_PRODUCTS)} title="products" />
        <Text>{cart.length}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
  },
});
