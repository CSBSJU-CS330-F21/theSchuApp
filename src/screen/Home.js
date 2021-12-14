import React from "react";
import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { Constants } from "expo-constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }) {
  const styles = StyleSheet.create({
    image: {
        
      flex: 1,
      justifyContent: "center",
    },

    buttonContainer1: {
      backgroundColor: "grey",
      marginHorizontal: 120,
      marginVertical: 870,
      height: 35,
      width: 150,

      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      borderWidth: 1,
      borderColor: "transparent",
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },

    buttonContainer2: {
      backgroundColor: "#2196F3",
      marginHorizontal: 60,
      marginVertical: -1220,
      height: 60,
      width: "70%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      borderRadius: 25,
      shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    },

    buttonText1: {
      textTransform: "uppercase",
      color: "black",
      fontSize: 11,
    },

    buttonText2: {
      textTransform: "uppercase",
      color: "black",
      fontSize: 20,
      color:"white",
      fontWeight:"800"
    },
    container: {
      marginTop: Constants,
    },
    csbsjuLogo: {
      marginHorizontal: 40,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: -500,
      width: 300,
      height: 300,
    },

    greyBackground: {
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
      marginHorizontal: 24,
      width: 330,
      height: 500,
      opacity: 0.6,
    },
    imageBackground: {
    marginTop:20,
      width: "100%",
      height: "100%",
      flex: 1,
    },
  });

  return (
    <View>
    <ImageBackground
      style={styles.imageBackground}
      resizeMode="cover"
      source={require("./../../assets/clouds.png")}
    >

      <View>
        <View style={styles.container}>
          <Image
            style={styles.greyBackground}
            source={require("./../../assets/lightgrey.png")}
          />

          <TouchableOpacity
            onPress={() => {
              navigation.push("CustomerMenuScreen");
            }}
            style={styles.csbsjuLogo}
          >
            <Image
              style={styles.csbsjuLogo}
              source={require("./../../assets/csbsju.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            
            onPress={() => {
              navigation.push("LoginScreen");
            }}
            style={styles.buttonContainer1}
          >
            <Text style={{fontWeight:"700", color:"white"}}>Employee Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.push("CoffeeTest");
            }}
            style={styles.buttonContainer2}
          >
            <Text style={styles.buttonText2}>SCHU MENU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
    </View>
  );
}
