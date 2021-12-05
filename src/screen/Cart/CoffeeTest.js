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
import { Tab, TabView } from 'react-native-elements';
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
const [index, setIndex] = React.useState(0);
  return (
    <><Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: "white",
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Menu"
        titleStyle={{ fontSize: 10 }}
        icon={{ name: "pint-outline", type: "ionicon" }} />
        <Tab.Item
          title={cart.length} 
          titleStyle={{ fontSize: 10 }}
          icon={{ name: "pint-outline", type: "ionicon" }}
        
        />
    </Tab>
    <TabView value={index} onChange={setIndex} animationType="spring">
    <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>  
    <ScrollView>
        <Text>{<Products addToCart={addToCart} />}</Text>
        </ScrollView>
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>   
        <ScrollView>
        <Text>{renderCart()}</Text>
        <Button title = "Checkout"/>
        </ScrollView>
        </TabView.Item>
      </TabView>
        {/* <View>
          <Text>{page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}</Text>
          <Text>{page === PAGE_CART && renderCart()}</Text>
        </View>
        <View style={{ borderWidth: 1, alignItems: 'center', position: 'absolute', bottom: -100 }}>
          <Button onPress={() => navigateTo(PAGE_CART)} title="cart" />
          <Text>{cart.length}</Text>
        </View>

        <View style={{ borderWidth: 1, alignItems: 'center', position: 'absolute-right', bottom: -100 }}>
          <Button onPress={() => navigateTo(PAGE_PRODUCTS)} title="products" />
        </View> */}
      </>
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
  bottomView:{
    width: '100%', 
    height: 50, 
    backgroundColor: '#FF9800', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  textStyle:{

    color: '#fff',
    fontSize:22
  }
  
});
