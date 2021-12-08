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
  TextInput,
  Modal,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import firebase from "../../../database/firebase-db";
import Coffee from "../../../Data/Coffee";
import { Tab, TabView } from "react-native-elements";
import Products from "../Products";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
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
    console.log("added to cart");
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

   // This is to manage Modal State
   const [isModalVisible, setModalVisible] = useState(false);
  
   // This is to manage TextInput State
   const [inputValue, setInputValue] = useState("");
 
   // Create toggleModalVisibility function that will
   // Open and close modal upon button clicks.
   const toggleModalVisibility = () => {
       setModalVisible(!isModalVisible);
   };

  const renderCart = () => (
    <>
      {cart.map((product, index) => (
        <View key={index}>
          <Text>{product.name}</Text>
          {/* add flavors */}
          <Text>{product.price}</Text>
          <Button title="remove" onPress={() => removeFromCart(product)}>
            Remove
          </Button>
        </View>
      ))}
    </>
  );

  //INSERT data from the data base
  const insertOrder = () => {
    const orderNumber = Math.floor(Math.random() * 100000);
    //insert new data into firebase
    //if cart is empty, do not insert throw error
      firebase.database().ref('orders/' + orderNumber).set({
        // tax: [.31, .35, .40],
        // // orderNumber will be incremented by 1
        // orderNumber: 1,
        displayName: inputValue,
        cart: cart
        
      }).then(() => {
        console.log('inserted');
        console.log(inputValue);
      }).catch((error) => {
        console.log(error)
      });
    
  }

  const [modalVisible, isSetModalVisible] = useState(false);
  const [index, setIndex] = React.useState(0);
  return (
    <>
      
      <Tab
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
          icon={{ name: "menu", type: "ionicon" }}
        />
        <Tab.Item
          title= {"CARTTESTTEST"+ " " + "("+ cart.length +")"}
          titleStyle={{ fontSize: 10 }}
          icon={{ name: "cart-outline", type: "ionicon" }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
        <ScrollView key={index} horizontal = {true} style = {{flexDirection:"column"}}>
         {<Products addToCart={addToCart} />}
        </ScrollView>
        </TabView.Item>

        

        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <ScrollView>
            {renderCart()}
             {/**  We are going to create a Modal with Text Input. */}
             <Button title="Purchase" onPress={toggleModalVisibility} />
  
  {/** This is our modal component containing textinput and a button */}
  <Modal animationType="slide" 
         transparent visible={isModalVisible} 
         presentationStyle="overFullScreen" 
         onDismiss={toggleModalVisibility}>
      <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
              <TextInput placeholder="Enter something..." 
                         value={inputValue} style={styles.textInput} 
                         onChangeText={(value) => setInputValue(value)} />

              {/** This button is responsible to close the modal */}
              <Button title="Close" onPress={toggleModalVisibility} />
              <Button title="Confirm Order" onPress={() => insertOrder()} />
          </View>
      </View>
  </Modal>
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
  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },

  textStyle: {
    color: "#fff",
    fontSize: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  }
});
