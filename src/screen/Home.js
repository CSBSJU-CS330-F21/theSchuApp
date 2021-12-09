import React from 'react';
import {
    ImageBackground,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import {Constants} from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({navigation}) {

    const styles = StyleSheet.create({

        image: {
            flex: 1,
            justifyContent: 'center'
        },

        buttonContainer1: {
            backgroundColor: 'grey',
            marginHorizontal: 135,
            marginVertical: 870,
            height: 27,
            width: 100,
            
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 25,
            borderWidth: 1,
            borderColor: 'transparent',
        },

        buttonContainer2: {
            backgroundColor: '#ce1142',
            marginHorizontal: 60,
            marginVertical: -1220,
            height: 80,
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            borderRadius: 25,
            borderWidth: 1,
            borderColor: '#ce1142',
            
            opacity: 0.8,
        },

        buttonText1: {
            textTransform: 'uppercase',
            color: "black",
            fontSize: 11
        },

        buttonText2: {
            textTransform: 'uppercase',
            color: "black",
            fontSize: 20
        },
        container: {
            marginTop: Constants
        },
        csbsjuLogo: {
            marginHorizontal: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: -500,
            width: 300,
            height: 300
        },

        greyBackground: {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
            marginHorizontal: 24,
            width: 330,
            height: 500,
            opacity: 0.6,
        },
        imageBackground: {
            width: '100%',
            height: '100%',
            flex: 1
        }

    })


    return (
        
        <ImageBackground style={
                styles.imageBackground
            }
            resizeMode='cover'
            source={
                require('./../../assets/clouds.png')
        }>
<View>
<View style={
                styles.container
            }>

                <Image style={
                        styles.greyBackground
                    }
                    source={
                        require('./../../assets/lightgrey.png')
                    }/>


                <TouchableOpacity onPress={
                        () => {
                            navigation.push('CustomerMenuScreen');
                        }
                    }
                    style={
                        styles.csbsjuLogo
                }>
                    <Image style={
                            styles.csbsjuLogo
                        }
                        source={
                            require('./../../assets/csbsju.png')
                        }/>
                </TouchableOpacity>

                <TouchableOpacity onPress={
                        () => {
                            navigation.push('LoginScreen');
                        }
                    }
                    style={
                        styles.buttonContainer1
                }>
                    <Text style={
                        styles.buttonText1
                    }>
                        Employee Login
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={
                        () => {
                            navigation.push('CustomerMenuScreen');
                        }
                    }
                    style={
                        styles.buttonContainer2
                }>
                    <Text style={
                        styles.buttonText2
                    }>
                        Press to Continue</Text>
                </TouchableOpacity>
            </View>
</View>
            
        </ImageBackground>


    )
}
