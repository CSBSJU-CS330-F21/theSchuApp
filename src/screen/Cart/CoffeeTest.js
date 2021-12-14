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
import { Tab, TabView } from "react-native-elements";
import ClassicDrinks from "../ClassicDrinks";
import SpecialtyDrinks from "../SpecialtyDrinks";
import Teas from "../Teas";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

export default function CoffeeTest({ navigation }) {
  const BottomTab = createBottomTabNavigator();
  const PAGE_PRODUCTS = "products";
  const PAGE_CART = "cart";
  const PAGE_SPECIAL = "specialtyDrinks"
  const PAGE_CLASSIC = "classicDrinks";
  const PAGE_TEA = "tea";
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (product) => {
    console.log("we are in");
    setCart([...cart, { ...product }]);
  };


  const renderCart = () => (
    <>
    <ScrollView>
      <Text style={{fontSize: 26,
    fontWeight: "800",
    margin: 10,}}>Cart</Text>
      {cart.map((product, index) => (
        <View style={{alignSelf:"center", padding: 5, width:250,margin:7, backgroundColor:"white", borderRadius:10,shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,}} key={index}>
          <View style={{padding:5}}>
          <Text style={{alignSelf:"center", fontSize:13, fontWeight:"800", color:"black"}}>{product.name}</Text>
          <Text style={{alignSelf:"center", fontSize:13, fontWeight:"800", color:"black"}}>{product.price}</Text>
          </View>

        <TouchableOpacity style={{alignSelf:"center", backgroundColor:"#2196F3", padding:5, borderRadius:10}} onPress={() => removeFromCart(product)}>
          <Text style={{fontSize:13, fontWeight:"800", color:"white"}}>REMOVE</Text>
        </TouchableOpacity>
          
        </View>
      ))}
      </ScrollView>
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

  

  const classicDrinks = () => (
    <>
      <Text>{<ClassicDrinks addToCart={addToCart} />}</Text>
    </>
  );
  const teas = () => (
    <>
      <Text>{<Teas addToCart={addToCart} />}</Text>
    </>
  );
  const specialtyDrinks = () => (
    <>
      <Text>{<SpecialtyDrinks addToCart={addToCart} />}</Text>
    </>
  )
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

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
          titleStyle={{ fontSize: 12, fontWeight:"800" }}
          icon={{ name: "menu", type: "ionicon" }}
        />
        <Tab.Item
          title={"CART" + " " + "(" + cart.length + ")"}
          titleStyle={{ fontSize: 12, fontWeight:"800" }}
          icon={{ name: "cart-outline", type: "ionicon" }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View>
            <View style={{ flexDirection:"row", alignSelf:"center" }}>
              <TouchableOpacity style={styles.selection} onPress={() => navigateTo(PAGE_CLASSIC)}>
                <Text style={{fontSize:15, fontWeight:"900",  color: "white" }}>CLASSIC DRINKS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selection} onPress={() => navigateTo(PAGE_TEA)}>
                <Text style={{fontSize:15, fontWeight:"900",  color: "white" }}>TEAS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selection} onPress={() => navigateTo(PAGE_SPECIAL)}>
                <Text style={{fontSize:15, fontWeight:"900",  color: "white" }}>SPECIALTY DRINKS</Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text>{page === PAGE_CLASSIC && classicDrinks()}</Text>
              <Text>{page === PAGE_SPECIAL && specialtyDrinks()}</Text>
              <Text>{page === PAGE_TEA && teas()}</Text>
              
            </View>

          </View>
        </TabView.Item>

        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View>
            <View style={{ height: "85%" }}>
              {renderCart()}
              {/**  We are going to create a Modal with Text Input. */}

              {/** This is our modal component containing textinput and a button */}
            </View>
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
  selection:{
    justifyContent:"center",
    alignItems:"center", 
    paddingLeft:5, 
    paddingRight:5, 
    height:40, 
    backgroundColor:"#2196F3", 
    borderRadius: 10,
    marginTop:15,
    margin:5
  },
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
