import React from "react"
import { View, Text } from "react-native"
import { styles } from "./style";

export const ResultIMC=(props)=>{
    return(
        <View style={styles.ResultImc}>
            <Text style={styles.information}>{props?.messageResult}</Text>
            <Text style={styles.numberImc}>{props?.resultIMC}</Text>
        </View>
    )
}