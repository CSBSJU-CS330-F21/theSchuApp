  import React, { useState } from 'react';
  import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView, Button, Modal, TouchableOpacity, Alert, Pressable} from 'react-native';
  import firebase from '../../database/firebase-db'

  export default function Coffee() {
    
    return (
      <SafeAreaView> 
        <View style={{ backgroundColor:"white", alignItems: "center", justifyContent:"center"}}>
          <GetCoffeeOne />
          <GetCoffeeTwo />
          <GetCoffeeThree />
          <GetCoffeeFour />
          <GetCoffeeFive />
          <GetCoffeeSix />
          <GetCoffeeSeven />
          <GetCoffeeEight />
          <GetCoffeeNine />
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
    flavors: {
      fontSize:13, 
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
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  })

  //Contains hard-coded values for SIZE&PRICE&TAXES
  //will need to add to database tree
  const DrinkSize = (props) => {
    return(
      <View>
        <Text style={styles.text}>{props.size}</Text>
      </View>
    )
  };
  const DrinkPrices = (props) => {
    return(
      <View>
        <Text style={styles.text}>${props.price}</Text>
      </View>
    )
  };
  const DrinkTaxes = (props) => {
    return(
      <View>
        <Text style={styles.text}>${props.taxes}</Text>
      </View>
    )
  };

  //GET coffee data from database
  const GetCoffeeOne = () => {
    var name = '';
    var flavors = '';
    var count = 0;
    firebase.database().ref('coffee/001').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    const [modalVisible, setModalVisible] = useState(false);
    
  return (
    <View style={styles.coffeeBox}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); count = count + 1;
                console.log(count)}}
              
            >
              <Text style={styles.textStyle}>Add to Cart</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{name}</Text>
        <Text style={styles.textStyle}>{flavors}</Text>
      </Pressable>
    </View>
  );

    // return(

      
      
    //   <Modal transparent={true} visible={checked}>
    //   <View style={styles.coffeeBox}>
    //     <Text style={styles.name}>{name}</Text>
    //     <Text style={styles.flavors}>{flavors}</Text>
    //     <TouchableOpacity onPress={handleClick}>
    //               <View>
    //                 <Text>CANCEL</Text>
    //               </View>
    //     </TouchableOpacity>
    //     <Button
    //      onPress= {
    //       () => {
    //         count = count + 1; 
    //         console.log(count);
    //       }
    //   }
    //     title="Add to Cart"
    //      color="#841584"
    //   />
    //   </View>
    //   </Modal>
    //   );
  }

  const GetCoffeeTwo = () => {
    var name = '';
    var flavors = '';

    firebase.database().ref('coffee/002').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.flavors}>{flavors}</Text>
      </View>
      );
  }
  const GetCoffeeThree = () => {
    var name = '';
    var flavors = '';

    firebase.database().ref('coffee/003').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.flavors}>{flavors}</Text>
      </View>
      );
  }

  const GetCoffeeFour = () => {
    var name = '';
    var flavors = '';

    firebase.database().ref('coffee/004').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.flavors}>{flavors}</Text>
      </View>
      );
  }

  const GetCoffeeFive = () => {
    var name = '';
    var flavors = '';

    firebase.database().ref('coffee/005').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.flavors}>{flavors}</Text>
      </View>
      );
  }

  const GetCoffeeSix = () => {
    var name = '';
    var flavors = '';

    firebase.database().ref('coffee/006').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.flavors}>{flavors}</Text>
      </View>
      );
  }
  const GetCoffeeSeven = () => {
    var name = '';
    var flavors = '';

    firebase.database().ref('coffee/007').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.flavors}>{flavors}</Text>
      </View>
      );
  }

  const GetCoffeeEight = () => {
    var name = '';
    var flavors = '';

    firebase.database().ref('coffee/008').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.flavors}>{flavors}</Text>
      </View>
      );
  }

  const GetCoffeeNine = () => {
    var name = '';
    var flavors = '';

    firebase.database().ref('coffee/009').on('value', (data) => {
      name = data.toJSON().name;
      flavors = data.toJSON().flavors;
    })

    return(
      <View style={styles.coffeeBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.flavors}>{flavors}</Text>
      </View>
      );
  }



  //Save the code below for stretch goal: DELETE & UPDATE & INSERT DATA from database
  // ************************************************************************************************
  //DELETE & UPDATE & INSERT
  //WILL BE A FUTURE FEATURE
  //DELETE data from the database
  //INSERT data from the data base
  const insertCoffee = () => {
    //insert new data into firebase
    setTimeout(() => {
      firebase.database().ref('taxes/').set({
        tax: [.31, .35, .40]
      }).then(() => {
        console.log('inserted');
      }).catch((error) => {
        console.log(error)
      });
    }, 5000)
  }

  const deleteCoffee = () => {
    //delete object from the database
    firebase.database().ref('coffee/').remove();
  }

  //UPDATE data from the database
  const updateCoffee = () => {
    //update data in database 
    firebase.database().ref('coffee/').update({
      name: 'schu cup'
    });

  }
