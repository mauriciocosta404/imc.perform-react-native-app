import React, {useState} from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { ResultIMC } from "./resultIMC"
import { styles } from "./style"

export const Form=()=>{
    
    const [height, setHeight] = useState(null);
    const [Weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("preencha o peso e altura");
    const [textButton, setTextButton] = useState("Calcular");

    const [imc, setImc] = useState(null);
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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Height:</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                />
                <Text style={styles.formLabel}>Weight:</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    placeholder="Ex: 60.75"
                    keyboardType="numeric"
                    value={Weight}
                />
                <TouchableOpacity
                    onPress={()=>validatorImc()}
                    style={styles.buttonCalculator}
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>    
                </TouchableOpacity>
       
            </View>
            <ResultIMC messageResult={messageIMC} resultIMC={imc}/>
        </View>
    )
}