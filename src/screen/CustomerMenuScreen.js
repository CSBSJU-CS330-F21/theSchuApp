// import React from 'react';

// import {View, StyleSheet, Text, Button} from 'react-native';

// export default function CustomerMenuScreen({navigation}){
//     return(
//       <Text>This is the customer Page</Text>
//     );
//   };

// const styles = StyleSheet.create({
//   title: {
//     marginBottom: 48,
//   },
//   input: {
//     marginVertical: 8,
//   },
//   loginButton: {
//     marginVertical: 32,
//   },

// });

import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import { Menu, ReviewDetails, ViewOrder } from "../screen";
import { COLORS, icons } from "../../constants";

// create/display what each tab/icon is/do
const Tab = createBottomTabNavigator();
// this is the navigator bar at the bottom
const CustomerMenuScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        style: {
          boarderTopWidth: 0,
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="The Schu"
        component={Menu}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={ReviewDetails}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomerMenuScreen;
