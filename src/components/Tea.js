import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import firebase from '../../database/firebase-db'

export default function Tea() {
    return (
      <SafeAreaView>
        <View style={{ backgroundColor:"white", alignItems: "center", justifyContent:"center"}}>
      <GetTeaOne/>
      <GetTeaTwo/>
      <GetTeaThree/>
      <GetTeaFour/>
      <GetTeaFive/>
      </View>
      </SafeAreaView>
    );
  }
  //universal price for all refreshers. Applied globally
  var price = '';
  firebase.database().ref('teas/price').on('value', (data) => {
    price = data.toJSON().teas;
  })
  //STYLE_SHEET
const styles = StyleSheet.create({
  name: {
    fontSize:15,
    fontWeight: "900",
    
  },
  flavors: {
    fontSize:13, 
    color:"white",
    
  },
  teaBox: {
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

  const GetTeaOne = () => {
    var name = '';
  
    firebase.database().ref('teas/001').on('value', (data) => {
      name = data.toJSON().name;
    })
    return(
      <View style={styles.teaBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      );
  }

  const GetTeaTwo = () => {
    var name = '';
    firebase.database().ref('teas/002').on('value', (data) => {
      name = data.toJSON().name;
    })
    return(
      <View style={styles.teaBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      );
  }

  const GetTeaThree = () => {
    var name = '';
  
    firebase.database().ref('teas/003').on('value', (data) => {
      name = data.toJSON().name;
    })
    return(
      <View style={styles.teaBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      );
  }

  const GetTeaFour = () => {
    var name = '';
  
    firebase.database().ref('teas/004').on('value', (data) => {
      name = data.toJSON().name;
    })
    return(
      <View style={styles.teaBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      );
  }

  const GetTeaFive = () => {
    var name = '';

  
    firebase.database().ref('teas/005').on('value', (data) => {
      name = data.toJSON().name;
    })
    return(
      <View style={styles.teaBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      );
  }

  