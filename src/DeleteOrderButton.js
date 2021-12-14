import React from "react";
import { SafeAreaView, TouchableOpacity, View, StyleSheet, FlatList, Text, Button } from "react-native";

export default function FlatButton({text, onPress}) {
    return(
      <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text styles={styles.buttonText}>{text} </Text>
      </View>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 10,
      backgroundColor: "#f01d71",
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 16,
      textAlign: 'center',
    }
  })