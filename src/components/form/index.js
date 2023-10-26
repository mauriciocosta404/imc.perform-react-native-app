import React from "react"
import { View, Text, TextInput } from "react-native"
import { ResultIMC } from "./resultIMC"

export const Form=()=>{
    return(
        <View>
            <View>
                <Text>Height:</Text>
                <TextInput
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                />
                <Text>Weight:</Text>
                <TextInput
                    placeholder="Ex: 60.75"
                    keyboardType="numeric"
                />
                <Button title="Perform IMC"/>    
            </View>
            <ResultIMC messageResult={messageIMC} ResultIMC={imc}/>
        </View>
    )
}