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
import ProductTest from "../ProductTest";
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
  const [products] = useState([
    {
      name: "Battery",
      price: "3.99",
    },
    {
      name: "Blanket",
      price: "10.99",
    },
  ]);

  const addToCart = (product) => {
    console.log("we are in");
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const renderProducts = () => (
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
  );

  const renderCart = () => (
    <>
      <Text>Cart:</Text>
      {cart.map((product, index) => (
        <View key={index}>
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>

          <Button onPress={() => addToCart(product)} title="button">
            Add to cart
          </Button>
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

  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // This is to manage TextInput State
  const [inputValue, setInputValue] = useState("");

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };

  

  const coffeeProd = () => (
    <>
      <Text>{<Products addToCart={addToCart} />}</Text>
    </>
  );
  const coffeeProdTwo = () => (
    <>
      <Text>{<ProductTest addToCart={addToCart} />}</Text>
    </>
  );
  //INSERT data from the data base
  const insertOrder = () => {
    const orderNumber = Math.floor(Math.random() * 100000);
    //insert new data into firebase
    //if cart is empty, do not insert throw error
    firebase
      .database()
      .ref("orders/" + orderNumber)
      .set({
        // tax: [.31, .35, .40],
        // // orderNumber will be incremented by 1
        // orderNumber: 1,
        displayName: inputValue,
        cart: cart,
      })
      .then(() => {
        console.log("inserted");
        console.log(inputValue);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          title={"CARTTESTTEST" + " " + "(" + cart.length + ")"}
          titleStyle={{ fontSize: 10 }}
          icon={{ name: "cart-outline", type: "ionicon" }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View style={{ alignSelf: "center" }}>
            <View>
              <Button
                onPress={() => navigateTo(PAGE_PRODUCTS)}
                title="products"
              />
              <Button onPress={() => navigateTo(PAGE_CART)} title="coffee" />
            </View>

            <View>
              <Text>{page === PAGE_PRODUCTS && coffeeProd()}</Text>
              <Text>{page === PAGE_CART && coffeeProdTwo()}</Text>
            </View>

            {/* <Text>{<Products addToCart={addToCart} />}</Text> */}
          </View>
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View>
            <ScrollView style={{ height: "85%", backgroundColor: "pink" }}>
              {renderCart()}
              {/**  We are going to create a Modal with Text Input. */}

              {/** This is our modal component containing textinput and a button */}
            </ScrollView>
            <Modal
              animationType="slide"
              transparent
              visible={isModalVisible}
              presentationStyle="overFullScreen"
              onDismiss={toggleModalVisibility}
            >
              <View>
                <View style={styles.modalView}>
                  <TextInput
                    placeholder="Enter First & Last Name"
                    value={inputValue}
                    style={styles.textInput}
                    onChangeText={(value) => setInputValue(value)}
                  />

                  {/** This button is responsible to close the modal */}
                  <TouchableOpacity
                    style={{
                      textAlign: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <View style={styles.buttoneModalView}>
                      <Text
                        style={{
                          alignSelf: "center",
                          fontSize: 20,
                          fontWeight: "700",
                          color: "white",
                        }}
                        onPress={toggleModalVisibility}
                      >
                        Close
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      textAlign: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                    }}
                  >
                    <View style={styles.buttoneModalView}>
                      <Text
                        style={{
                          alignSelf: "center",
                          fontSize: 20,
                          fontWeight: "700",
                          color: "white",
                        }}
                        onPress={() => insertOrder()}
                      >
                        Submit
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View style={styles.buttoneView}>
              <TouchableOpacity
                style={{
                  textAlign: "center",
                  alignContent: "center",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "white" }}
                  onPress={toggleModalVisibility}
                >
                  Purchase
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "70%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttoneView: {
    fontSize: 20,
    fontWeight: "700",
    backgroundColor: "#2196F3",
    width: 180,
    height: 40,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 60,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttoneModalView: {
    fontSize: 18,
    fontWeight: "500",
    backgroundColor: "#2196F3",
    width: 150,
    height: 40,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 60,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
