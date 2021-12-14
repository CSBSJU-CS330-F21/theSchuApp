import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import { icons } from "../../../constants";
import Swipeable from "react-native-gesture-handler/Swipeable";

const workerOrderList = (props) => {
  const [orderItems, setOrderItems] = React.useState([]);
  const [checked, setChecked] = React.useState(false);
  const handleClick = () => setChecked(!checked);

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

  //change the number of item and price
  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    //show which order/item it is
    let item = orderList.filter((a) => a.menuId == menuId);
    //adding items
    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        //reset all the constuctors
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }
      setOrderItems(orderList);
    }
    //removing items
    else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }
      setOrderItems(orderList);
    }
  }
  function getOrderQty(menuId) {
    let orderItem = orderItems.filter((a) => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }
    return 0;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);
    //putting string total to int number again
    total = Number.parseFloat(total);
    //returning the int number to rounding to 2 decimal places
    return total.toFixed(2);
  }

  // function finalTotal() {
  //   let lastTotal = orderItems.reduce((a, b) => a + b.price * b.qty, 0);
  //   var totalCost = 0;
  //   totalCost += lastTotal;
  //   //putting string total to int number again
  //   lastTotal = Number.parseFloat(lastTotal);
  //   //returning the int number to rounding to 2 decimal places
  //   return totalCost.toFixed(2);
  // }

  // const [calculateTotal] = orderItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <View>
      <Swipeable renderRightActions={rightSwipe} overshootRight={false}>
        {/* Pop Up Screen */}
        <Modal transparent={true} visible={checked}>
          <View
            style={{
              backgroundColor: "transparent",
              flex: 1,
            }}
          >
            <ScrollView
              style={{
                backgroundColor: "white",
                margin: 50,
                padding: 40,
                borderRadius: 10,
                flex: 1,
              }}
            >
              {/* image */}
              <View
                style={{
                  paddingTop: 25,
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.drink}
                  resizeMode="contain"
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              </View>
              {/* add ons */}
              <View
                style={{
                  paddingTop: 30,
                }}
              >
                {props.data.addon.map((item) => (
                  <Text key={item} style={styles.itemSubHeading}>
                    {item}
                  </Text>
                ))}
              </View>
              {/* Ingredients */}
              <View
                style={{
                  paddingTop: 30,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  {props.data.ingredients}
                </Text>
              </View>
              {/* Save/cancel Button */}

              <View
                style={{
                  paddingTop: 20,
                  paddingBottom: 50,
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity onPress={handleClick}>
                  <View
                    style={{
                      height: 30,
                      width: 80,
                      backgroundColor: "red",
                      alignItems: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>CANCEL</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleClick}>
                  <View
                    style={{
                      height: 30,
                      width: 80,
                      backgroundColor: "red",
                      alignItems: "center",
                      alignSelf: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text>SAVE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </Modal>

        <View style={styles.container}>
          <View
            style={{
              justifyContent: "flex-start",
            }}
          >
            <TouchableOpacity onPress={handleClick}>
              <Image
                source={icons.drink}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingStart: 20,
            }}
          >
            <TouchableOpacity onPress={handleClick}>
              <Text style={styles.itemHeading}>{props.data.drink}</Text>
              <Text style={styles.itemHeading}>${sumOrder()}</Text>
              {/* printing add on in different lines */}
              {props.data.addon.map((item) => (
                <Text key={item} style={styles.itemSubHeading}>
                  {item}
                </Text>
              ))}
            </TouchableOpacity>
          </View>

          {/* counter */}
          <View
            style={{
              alignContent: "flex-end",
            }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                paddingStart: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: 25,
                  borderBottomLeftRadius: 25,
                }}
                onPress={() =>
                  editOrder("-", props.menuId, props.data.price, 0)
                }
              >
                <Text style={styles.counter}>-</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 40,
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.counter}>{getOrderQty(props.menuId)}</Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 50,
                  backgroundColor: "red",
                  alignItems: "center",
                  justifyContent: "center",
                  borderTopRightRadius: 25,
                  borderBottomRightRadius: 25,
                }}
                onPress={() =>
                  editOrder("+", props.menuId, props.data.price, 0)
                }
              >
                <Text style={styles.counter}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Swipeable>
    </View>
  );
};

export default workerOrderList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "#ccc",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: 10,
  },

  deletingText: {
    color: "#fff",
    fontWeight: "bold",
  },
  counter: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },

  itemSubHeading: {
    fontSize: 10,
  },
});
