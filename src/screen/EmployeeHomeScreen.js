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
const EmployeeHomeScreen = () => {
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
        name="View Orders"
        component={ViewOrder}
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

export default EmployeeHomeScreen;
