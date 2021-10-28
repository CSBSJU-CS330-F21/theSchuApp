import React, { useState } from "react";
import CartOrder from "./listDisplay/cartOrder";
import { SafeAreaView, View, StyleSheet, FlatList, Text } from "react-native";
import data from "../../drinkData";
const ReviewDetails = () => {
  // Declare a new list variable, which we'll call set
  const [lists, setLists] = useState(data);

  const deleteItem = (index) => {
    const arr = [...lists];
    //start remove postion index and only the first element
    arr.splice(index, 1);
    setLists(arr);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={lists}
        renderItem={({ item, index }) => {
          return (
            <CartOrder data={item} handleDelete={() => deleteItem(index)} />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default ReviewDetails;

// import { StatusBar, useState } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import data from "../drinkData";

// export default function App() {
//   // Declare a new list variable, which we'll call set
//   // const [lists, updateList] = useState(data);

//   // const deleteItem = (index) => {
//   //   const arr = [...lists];
//   //   arr.splice(index, 1);
//   //   updateList(arr);
//   // };

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//         {data.map(({ drink, addon }, index) => {
//           return (
//             //what when we touch certain stuff on screen
//             <View style={styles.container}>
//               <Text style={styles.itemHeading}>{drink}</Text>
//               <View>
//                 {addon.map((addon) => (
//                   <Text style={styles.itemSubHeading}>{addon}</Text>
//                 ))}
//               </View>
//               <button>edit</button>
//               <button>delete</button>
//             </View>
//           );
//         })}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     backgroundColor: "#fff",
//     shadowColor: "#ccc",
//     shadowOffset: { width: 3, height: 3 },
//     shadowOpacity: 0.9,
//     marginVertical: 10,
//   },
//   deleteBox: {
//     backgroundColor: "red",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 100,
//     height: 80,
//   },

//   itemHeading: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },

//   deletingText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },

//   itemSubHeading: {
//     fontSize: 15,
//   },
// });
