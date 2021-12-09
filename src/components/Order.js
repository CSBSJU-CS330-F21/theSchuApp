import React from 'react';
import {View, Text} from "react-native";

function Order({orderName, orderDrink}){

        return(
        
            <View>
                <Text>
                    __________________________________________________{"\n"}
                    Name: {orderName}{"\n"}
                    Drinks: {orderDrink}
                </Text>
            </View>
        )
    

}

export default Order

