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
  Modal,
  TouchableOpacity,
  Alert,
  Pressable,
} from "react-native";
import firebase from "../../../database/firebase-db";
import Coffee from "../../../Data/Coffee";
import Products from "../Products";
import { Console } from "jest-util";


  const BasicCartDisplay = (props) =>{
   
      return(
        //   <Text>
        //   children Compnoent {childName} Buttonstuff
        // <Button onPress={() => props.callparentfunction()}> Call Parent</Button>
        // </Text>
       
        <View>
        <Text>{props.data}</Text>
        <Text>jlakdjfslk</Text>
        </View>
      )
  }

  export default BasicCartDisplay;


