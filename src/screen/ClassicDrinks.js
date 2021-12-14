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

export default function classicDrinks({ addToCart }) {
  const [classicDrinksProducts] = useState([
    {
      name: "Daily Brew",
      price: "$2.02",
      falvors: "lkajdfs",
    },
    {
      name: "Watermelon Cucumber",
      price: "$4.79",
      falvors: "N/A",
    },
    {
      name: "Wildberry hisbuscus ",
      price: "$4.79",
      falvors: "N/A",
    },
    {
      name: "Blood Orange Coconut",
      price: "$4.79",
      falvors: "N/A",
    },
    {
      name: "Strawberry Acai",
      price: "$4.79",
      falvors: "N/A",
    },
    {
      name: "Chai Latte",
      price: "$3.66",
      falvors: "N/A",
    },
    {
      name: "Apple Cider",
      price: "$2.65",
      falvors: "N/A",
    },
    {
      name: "Hot Chocolate",
      price: "$3.24",
      falvors: "N/A",
    },
    {
      name: "Matcha Latte",
      price: "$3.71",
      falvors: "N/A",
    },
    {
      name: "Latte",
      price: "$3.39",
      falvors: "N/A",
    }
  ]);

  
  return (
    <>
      <View>
        <Text style={styles.drinkTitle}>Classic Drinks</Text>
        <Text>
          {classicDrinksProducts.map((product, index) => (
            <View key={index}>
              <View style={styles.container}>
                <Text style={{alignSelf:"center", alignItems:"center", justifyContent:"center",fontSize:14, fontWeight:"800"}}>{product.name}</Text>
                {/* This section will display flavors <Text>{product.price}</Text> */}
                
                <TouchableOpacity style={{backgroundColor:"#2196F3", padding:5, marginTop:5, borderRadius:10}} onPress={() => addToCart(product)}>
                  <Text style={{fontWeight:"700", color:"white", fontSize:13}}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}{" "}
        </Text>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    fontSize: 11,
    fontWeight: "700",
    color: "white",
  },
  add: {
    marginTop: 10,
    width: 50,
    height: 30,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
  },
  drinkTitle: {
    fontSize: 26,
    fontWeight: "800",
    margin: 10,
    position: "relative",
    left: 0,
  },
  container: {
    width: 170,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    backgroundColor: "white",
    borderColor: "black",
    borderStyle: "solid",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical:20
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
  },
  input: {
    paddingTop: 10,
    borderColor: "grey",
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    paddingTop: 10,
    borderColor: "grey",
    borderBottomWidth: 2,
  },
  button: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  modal: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
});