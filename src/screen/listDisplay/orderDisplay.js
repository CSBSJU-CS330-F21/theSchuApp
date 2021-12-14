import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const OrderDisplay = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <View>
          <Text>{props.orders}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OrderDisplay;
