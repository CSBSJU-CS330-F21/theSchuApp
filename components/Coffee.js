import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import firebase from '../database/firebase-db'

const drinksSizes =[{
  size: ['12oz', '16oz', '20oz']
}]

const drinksPrices =[{
  price: [4.30, 4.93, 5.57]
}]

const drinksTaxes =[{
  //sales tax if they use debit/credit chardet
  taxes: [.31, .35, .40]
}]


export default function Coffee() {
  return (
    <SafeAreaView> 
      <View>
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

{/* Hard coded data below will be removed soon */}
      <View>
        <DrinkSize
        size={drinksSizes[0].size[1]}/>
        <DrinkPrices
        price={drinksPrices[0].price[0]} />
        <DrinkTaxes
        taxes={drinksTaxes[0].taxes[0]} />
      </View>
    </SafeAreaView>
  );
}

//STYLE_SHEET
const styles = StyleSheet.create({
  name: {
    fontSize:15,
    fontWeight: "900",
    textAlign: "center"
  },
  flavors: {
    fontSize:15, 
    color:"grey",
    textAlign: "center",
    marginBottom:10
  },
  text:{
    fontSize:15,
    fontWeight: "900",
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

  firebase.database().ref('coffee/001').on('value', (data) => {
    name = data.toJSON().name;
    flavors = data.toJSON().flavors;
  })

  return(
    <View >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.flavors}>{flavors}</Text>
    </View>
    );
}

const GetCoffeeTwo = () => {
  var name = '';
  var flavors = '';

  firebase.database().ref('coffee/002').on('value', (data) => {
    name = data.toJSON().name;
    flavors = data.toJSON().flavors;
  })

  return(
    <View>
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
    <View>
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
    <View>
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
    <View>
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
    <View>
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
    <View>
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
    <View>
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
    <View>
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
    firebase.database().ref('coffee/002').set({
      name: 'Cold Brew 02',
      size: '12oz',
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
