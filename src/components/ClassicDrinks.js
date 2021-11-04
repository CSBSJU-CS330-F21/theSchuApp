import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import firebase from '../../database/firebase-db'

export default function Coffee() {
  return (
    <SafeAreaView> 
      <View style={{ backgroundColor:"white", alignItems: "center", justifyContent:"center"}}>
        <GetDrinkOne />
        <GetDrinkTwo />
        <GetDrinkThree />
        <GetDrinkFour />
        <GetDrinkFive />
        <GetDrinkSix />
        <GetDrinkSeven />
        <GetDrinkEight />

        
      </View>
    </SafeAreaView>
  );
}

//STYLE_SHEET
const styles = StyleSheet.create({
    name: {
      fontSize:15,
      fontWeight: "900",
      
    },
    sizes: {
      fontSize:13, 
      fontWeight:"700",
      color:"white",
      marginTop:10
      
    },
    price: {
        fontSize:13, 
        fontWeight:"700",
        color:"white",
        
      },
    coffeeBox: {
      alignItems: "center", 
      justifyContent:"center", 
      marginTop:15, 
      marginBottom:15,
      backgroundColor:"#03a9f4", 
      borderRadius:10, 
      width:250, 
      height:80
    },
    text:{
      fontSize:15,
      fontWeight: "900",
      textAlign: "center"
    }
  })

//GET coffee data from database
const GetDrinkOne = () => {
    var name = '';
    var small = '';
    var medium = '';
    var large = '';
  
    firebase.database().ref('classicDrinks/001').on('value', (data) => {
      name = data.toJSON().name;
      small = data.toJSON().small;
      medium = data.toJSON().medium;
      large = data.toJSON().large;
    })
  
    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      );
  }
  
  const GetDrinkTwo = () => {
    var name = '';
    var small = '';
    var medium = '';
    var large = '';
  
    firebase.database().ref('classicDrinks/002').on('value', (data) => {
      name = data.toJSON().name;
      small = data.toJSON().small;
      medium = data.toJSON().medium;
      large = data.toJSON().large;
    })
  
    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      );
  }
  const GetDrinkThree = () => {
    var name = '';
    var small = '';
    var medium = '';
    var large = '';
  
    firebase.database().ref('classicDrinks/003').on('value', (data) => {
      name = data.toJSON().name;
      small = data.toJSON().small;
      medium = data.toJSON().medium;
      large = data.toJSON().large;
    })
  
    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      );
  }
  
  const GetDrinkFour = () => {
    var name = '';
    var small = '';
    var medium = '';
    var large = '';
  
    firebase.database().ref('classicDrinks/004').on('value', (data) => {
      name = data.toJSON().name;
      small = data.toJSON().small;
      medium = data.toJSON().medium;
      large = data.toJSON().large;
    })
  
    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      );
  }
  
  const GetDrinkFive = () => {
    var name = '';
    var small = '';
    var medium = '';
    var large = '';
  
    firebase.database().ref('classicDrinks/005').on('value', (data) => {
      name = data.toJSON().name;
      small = data.toJSON().small;
      medium = data.toJSON().medium;
      large = data.toJSON().large;
    })
  
    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      );
  }
  
  const GetDrinkSix = () => {
    var name = '';
    var small = '';
    var medium = '';
    var large = '';
  
    firebase.database().ref('classicDrinks/006').on('value', (data) => {
      name = data.toJSON().name;
      small = data.toJSON().small;
      medium = data.toJSON().medium;
      large = data.toJSON().large;
    })
  
    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      );
  }
  const GetDrinkSeven = () => {
    var name = '';
    var small = '';
    var medium = '';
    var large = '';
  
    firebase.database().ref('classicDrinks/007').on('value', (data) => {
      name = data.toJSON().name;
      small = data.toJSON().small;
      medium = data.toJSON().medium;
      large = data.toJSON().large;
    })
  
    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      );
  }
  
  const GetDrinkEight = () => {
    var name = '';
    var small = '';
    var medium = '';
    var large = '';
  
    firebase.database().ref('classicDrinks/008').on('value', (data) => {
      name = data.toJSON().name;
      small = data.toJSON().small;
      medium = data.toJSON().medium;
      large = data.toJSON().large;
    })
  
    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
      </View>
      );
  }
  
  