import React from "react"
import { View, Text } from "react-native"

export const ResultIMC=(props)=>{
    
    console.log(props);

    return(
        <View>
            <Text>{props?.messageResult}</Text>
            <Text>{props?.resultIMC}</Text>
        </View>
    )
}