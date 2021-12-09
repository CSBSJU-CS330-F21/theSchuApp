
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Modal, 
         View, TextInput, Dimensions } from "react-native";
  
const { width } = Dimensions.get("window");
  
export default function ButtonFormTry() {
    
    // This is to manage Modal State
    const [isModalVisible, setModalVisible] = useState(false);
  
    // This is to manage TextInput State
    const [inputValue, setInputValue] = useState("");
  
    // Create toggleModalVisibility function that will
    // Open and close modal upon button clicks.
    const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };
  
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar style="auto" />
            {/**  We are going to create a Modal with Text Input. */}
            <Button title="Show Modal" onPress={toggleModalVisibility} />
  
            {/** This is our modal component containing textinput and a button */}
            <Modal animationType="slide" 
                   transparent visible={isModalVisible} 
                   presentationStyle="overFullScreen" 
                   onDismiss={toggleModalVisibility}>
                <View style={styles.viewWrapper}>
                    <View style={styles.modalView}>
                        <TextInput placeholder="Enter something..." 
                                   value={inputValue} style={styles.textInput} 
                                   onChangeText={(value) => setInputValue(value)} />
  
                        {/** This button is responsible to close the modal */}
                        <Button title="Close" onPress={toggleModalVisibility} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
  
// These are user defined styles
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    },
});


<TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <ScrollView>
            <Text>{renderCart()}</Text>
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          isSetModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); insertOrder();}}>
              <Text style={styles.textStyle}>Proceed to Checkout</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      ><Text>Checkout</Text></Pressable> 
            <Button title="Checkout" onPress={() => insertOrder()}/> 
          </ScrollView>
         
        </TabView.Item>



   {/* <View>
          <Text>{page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}</Text>
          <Text>{page === PAGE_CART && renderCart()}</Text>
        </View>
        <View style={{ borderWidth: 1, alignItems: 'center', position: 'absolute', bottom: -100 }}>
          <Button onPress={() => navigateTo(PAGE_CART)} title="cart" />
          <Text>{cart.length}</Text>
        </View>

        <View style={{ borderWidth: 1, alignItems: 'center', position: 'absolute-right', bottom: -100 }}>
          <Button onPress={() => navigateTo(PAGE_PRODUCTS)} title="products" />
        </View> */}