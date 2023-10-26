import React from "react"
import { View, Text } from "react-native"

export const ResultIMC=(props)=>{
    return(
        <View>
            <Text>{props?.resultIMC}</Text>
            <Text>{props?.messageResult}</Text>
        </View>
    )
}