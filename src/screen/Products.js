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
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View>
        <Text style={styles.drinkTitle}>Specialty Drinks</Text>
        <Text>
          {products.map((product, index) => (
            <ScrollView key={index}>
              <View style={styles.container} key={index}>
              <Text>{product.name}</Text>
              {/* This section will display flavors <Text>{product.price}</Text> */}
       
              <Button onPress={() => addToCart(product)} title="+" />
              </View>
              
            </ScrollView>
          ))}{" "}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  drinkTitle: {
    fontSize: 26,
    fontWeight: "800",
    margin: 10,
    
  },
  container: {
    width: 150,
    height: 70,
    padding: 10,
    backgroundColor: "blue",
    margin: 10,
    borderRadius: 10,

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
