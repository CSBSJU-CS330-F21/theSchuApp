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
  const [products] = useState([
    {
      name: "The Schu",
      falvors: "Dark Chocolate, Toasted Marshmallow",
    },
    {
      name: "SJU Senate",
      falvors: "White Chocolate, Caramel",
    },
    {
      name: "Chapel Walk",
      falvors: "Caramel Almond",
    },
    {
      name: "Turtle Mocha",
      falvors: "Dark Chocolate, Caramel",
    },
    {
      name: "The Echo",
      falvors: "White Chocolate, Almond, Vanilla",
    },
    {
      name: "The Link",
      falvors: "White & Dark Chocolate",
    },
    {
      name: "Andes Mint Extreme",
      falvors: "Dark Chocolate, Mint",
    },
    {
      name: "Abbey Road",
      falvors: "Dark Chocolate, Raspberry",
    },
    {
      //id a number pass when swiped they know what specfic ID to delete
      name: "Sexton Sunrise",
      falvors: "Carmel, Vanilla",
    },
  ]);

  return (
    <>
      {/* <Text>Products:</Text> */}
      {products.map((product, index) => (
        <View style={styles.container} key={index}>
          <Text>{product.name}</Text>
          {/* This section will display flavors <Text>{product.price}</Text> */}

          <Button onPress={() => addToCart(product)} title="+"/>
        </View>
      ))}{" "}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width:70,
    height:20,
    backgroundColor: "white",
    margin: 10,
    marginHorizontal: 10, 
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
  },
});