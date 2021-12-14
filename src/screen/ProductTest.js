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

export default function Products({ addToCart }) {
  const [coffeeProducts] = useState([
    {
      name: "specialy drinks",
      falvors: "lkajdfs",
    },
    {
      name: "The Schu",
      falvors: "Dark Chocolate, Toasted Marshmallow",
    },
  ]);

  
  return (
    <>
      <View>
        <Text style={styles.drinkTitle}>Coffee</Text>
        <Text>
          {coffeeProducts.map((product, index) => (
            <View key={index}>
              <View style={styles.container}>
                <Text>{product.name}</Text>
                {/* This section will display flavors <Text>{product.price}</Text> */}
                <Button onPress={() => addToCart(product)} title="+" />
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
    width: 150,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
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
    marginHorizontal: 20,
    marginVertical: 20,
    
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