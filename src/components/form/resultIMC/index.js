import React from "react"
import { View, Text } from "react-native"
import { styles } from "./style";

export const ResultIMC=({messageResult,resultIMC})=>{
    return(
        <View style={styles.ResultImc}>
            <Text style={styles.information}>{messageResult}</Text>
            <Text style={styles.numberImc}>{resultIMC}</Text>
        </View>
    )
}