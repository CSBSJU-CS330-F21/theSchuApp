import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import firebase from '../../database/firebase-db'

export default function Refreshers() {
  return (
    <SafeAreaView> 
      <View style={{ backgroundColor:"white", alignItems: "center", justifyContent:"center"}}>
      <GetRefresherOne/>
      <GetRefresherTwo/>
      <GetRefresherThree/>
      <GetRefresherFour/>
      </View>
    </SafeAreaView>
  );
}

//universal price for all refreshers. Applied globally
var price = '';
firebase.database().ref('refreshers/price').on('value', (data) => {
  price = data.toJSON();
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
  refresherBox: {
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

const GetRefresherOne = () => {
  var name = '';

  firebase.database().ref('refreshers/001').on('value', (data) => {
    name = data.toJSON().name;
  })
  return(
    <View style={styles.refresherBox}>
      <Text style={styles.name}>{name}</Text>
      
    </View>
    );
}

const GetRefresherTwo = () => {
  var name = '';

  firebase.database().ref('refreshers/002').on('value', (data) => {
    name = data.toJSON().name;
  })
  return(
    <View style={styles.refresherBox}>
      <Text style={styles.name}>{name}</Text>
      
    </View>
    );
}

const GetRefresherThree = () => {
  var name = '';
  firebase.database().ref('refreshers/003').on('value', (data) => {
    name = data.toJSON().name;
  })
  return(
    <View style={styles.refresherBox}>
      <Text style={styles.name}>{name}</Text>
      
    </View>
    );
}

const GetRefresherFour = () => {
  var name = '';

  firebase.database().ref('refreshers/004').on('value', (data) => {
    name = data.toJSON().name;
  })
  return(
    <View style={styles.refresherBox}>
      <Text style={styles.name}>{name}</Text>
      
    </View>
    );
}
