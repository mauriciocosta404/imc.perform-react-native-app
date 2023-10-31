import React, {useState} from "react"
import { View, Text, TextInput, Button } from "react-native"
import { ResultIMC } from "./resultIMC"

export const Form=()=>{
    
    const [height, setHeight] = useState(null);
    const [Weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    const imcCalculator=()=>{
        return setImc((Weight/(height*Weight)).toFixed(2));
    }

    const validatorImc=()=>{
        if(Weight && height){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC("seu imc é igual a = ");
            setTextButton("Calcular novamente");
            return
        }

        setImc(null);
        setTextButton("Calcular");
        setMessageIMC("Preenha o peso de altura");
    }

    return(
        <View>
            <View>
                <Text>Height:</Text>
                <TextInput
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                />
                <Text>Weight:</Text>
                <TextInput
                    onChangeText={setWeight}
                    placeholder="Ex: 60.75"
                    keyboardType="numeric"
                    value={Weight}
                />
                <Button 
                    title={textButton}
                    onPress={()=>validatorImc()}    
                />    
            </View>
            <ResultIMC messageResult={messageIMC} resultIMC={imc}/>
        </View>
    )
}