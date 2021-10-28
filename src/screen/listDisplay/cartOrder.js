import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const workerOrderList = (props) => {
  const [orderItems, setOrderItems] = React.useState([]);

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter((a) => a.menuId == menuId);
    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0] * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }
      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty + price;
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

  return (
    <View style={styles.container}>
      <Text style={styles.itemHeading}>{props.data.drink}</Text>
      <View>
        {/* printing add on in different lines */}
        {props.data.addon.map((item) => (
          <Text key={item} style={styles.itemSubHeading}>
            {item}
          </Text>
        ))}
      </View>

      {/* counter */}
      <View
        style={{
          bottom: -20,
          height: 50,
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            backgroundColor: "yellow",
            alignItems: "center",
            justifyContent: "center",
            borderTopLeftRadius: 25,
            borderBottomLeftRadius: 25,
          }}
          onPress={() => editOrder("-", props.menuId, props.price)}
        >
          <Text style={styles.subtracting}>-</Text>
        </TouchableOpacity>
        <View
          style={{
            width: 50,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.subtracting}>{getOrderQty(props.menuId)}</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 50,
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 25,
            borderBottomRightRadius: 25,
          }}
          onPress={() => editOrder("+", props.menuId, props.price)}
        >
          <Text style={styles.subtracting}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default workerOrderList;

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
  subtracting: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 40,
  },

  itemSubHeading: {
    fontSize: 15,
  },
});
