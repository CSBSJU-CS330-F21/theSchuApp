/* import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SnapshotViewIOSBase,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import firebase from '../../../database/firebase-db'

const SCREEN_WIDTH = Dimensions.get("window").width;
const names = [];
const drinks = [];

function GetDataOne(props){
  var name = '';

  firebase.database().ref('orders').on('value', function(snap)  {

      snap.forEach(function(childnodes){
        //console.log(childnodes.val().name);
        names.push(childnodes.val());
        drinks.push(childnodes.val().drink);
      })
  })
  return (
    <View>
      <Text>
        {props}
      </Text>
    </View>
  )
  


}

const ItemBox = (props) => {




  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-50, 0.5],
      outputRange: [1, 0.1],
    });
  
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  }

  // var state = Boolean(false);

  // function isSelected(prevState) {
  //   if (prevState == false) {
  //     prevState = true;
  //   } else {
  //     prevState == false;
  //   }
  // }

  // //displaying extraDetails

  // const extraDetail = () => {
  //   return (
  //     <View>
  //       <Text>{props.data.ExtraDetail}</Text>
  //     </View>
  //   );
  // };

  return (
    <Swipeable renderRightActions={rightSwipe} overshootRight={false}>
      <TouchableWithoutFeedback
      // onPress={() => {
      //   isSelected(state);
      //   alert(state);
      // }}
      >
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 5,
            }}
          >
            
           {GetDataOne(names)}
          </View>
        
        </View>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
 
  

};

export default ItemBox;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    marginVertical: 10,
  },
  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 80,
  },

  itemHeading: {
    fontWeight: "bold",
    fontSize: 20,
  },

  deletingText: {
    color: "#fff",
    fontWeight: "bold",
  },

  itemSubHeading: {
    fontSize: 15,
  },
});
 */