import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SCREEN_WIDTH = Dimensions.get("window").width;

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
  };

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
            <Text style={styles.itemHeading}>{props.data.name}</Text>
            <Text style={styles.itemHeading}>{props.data.pickup}</Text>
          </View>
          <Text style={styles.itemSubHeading}>{props.data.ExtraDetail}</Text>

          {props.data.drink.map((item, index) => (
            <Text key={index} style={styles.itemSubHeading}>
              {item}
            </Text>
          ))}
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
