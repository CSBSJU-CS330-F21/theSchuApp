import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screen/Home";
import EmployeeHomeScreen from "../screen/EmployeeHomeScreen";
import LoginScreen from "../screen/LoginScreen";
import CustomerMenuScreen from "../screen/CustomerMenuScreen";
import Cart from "../screen/Cart/Cart";
import { Menu, ReviewDetails, ViewOrder } from "../screen";

const Stack = createStackNavigator();

const SchuAppStack = createStackNavigator();
const SchuAppScreen = () => (
  <SchuAppStack.Navigator>
    <SchuAppStack.Screen name="Home" component={Home} options={{
      headerShown: false
    }} />
    <SchuAppStack.Screen
      name="EmployeeHomeScreen"
      component={EmployeeHomeScreen}
    />
    <SchuAppStack.Screen name="Menu" component={Menu} />
    <SchuAppStack.Screen name="ReviewDetails" component={ReviewDetails} />
    <SchuAppStack.Screen name="View Order" component={ViewOrder} />
    <SchuAppStack.Screen name="LoginScreen" component={LoginScreen} />
    <SchuAppStack.Screen name="Cart" component={Cart} />
    <SchuAppStack.Screen
      name="CustomerMenuScreen"
      component={CustomerMenuScreen}
      options={{ title: "The Schu" }}
    />
  </SchuAppStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <SchuAppScreen />
  </NavigationContainer>
);
