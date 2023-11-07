
import React from "react"
import { View, Text , TouchableOpacity, Share } from "react-native"
import { styles } from "./style";

export const ResultIMC = ({messageResult,resultIMC}) => {

    const onShare = async () => {
        const result = await Share.share({
            message:`Meu imc hoje é: ${resultIMC}`
        })
    }

    return(
        <View style={styles.ResultImc}>
            <View style={styles.boxShareButton}>
            <Text style={styles.information}>{messageResult}</Text>
            <Text style={styles.numberImc}>{resultIMC}</Text>
                    <TouchableOpacity
                        onPress={onShare}
                        style={styles.shared}
                    >
                        <Text style={styles.sharedText}>Share</Text>   
                    </TouchableOpacity>
            </View>
        </View>
    )
}