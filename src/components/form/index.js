import React, {useState} from "react"
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
 } from "react-native"
import { ResultIMC } from "./resultIMC"
import { styles } from "./style"

export const Form=()=>{
    
    const [height, setHeight] = useState(null);
    const [Weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState("preencha o peso e altura");
    const [textButton, setTextButton] = useState("Calcular");
    const [imc, setImc] = useState(null);
    const [messageError,setMessageError] = useState(null);
    const [imcList,setImcList] = useState([]);

    const imcCalculator = () => {
        let heightFormat = height.replace(",",".");
        let totalImc = (Weight/(heightFormat*heightFormat)).toFixed(2);
        setImcList((arr)=>[...arr,{id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc);
    }

    const validatorImc=()=>{
        if(Weight && height){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageIMC("seu imc é igual a = ");
            setTextButton("Calcular novamente");
            setMessageError(null);
            return
        }

        verification();
        setImc(null);
        setTextButton("Calcular");
        setMessageIMC("Preenha o peso de altura");
    }

    const verification=()=>{
        if(!imc){
            Vibration.vibrate();
            setMessageError("Requied Field");
        }
    }

    return(
        <View style={styles.formContext}>
            {!imc ? 
            
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Height:</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                />
                <Text style={styles.errorMessage}>{messageError}</Text>
                <Text style={styles.formLabel}>Weight:</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    placeholder="Ex: 60.75"
                    keyboardType="numeric"
                    value={Weight}
                />
                <Text style={styles.errorMessage}>{messageError}</Text>
                <TouchableOpacity
                    onPress={()=>validatorImc()}
                    style={styles.buttonCalculator}
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>    
                </TouchableOpacity>
            </Pressable> 
            :
            <View style={styles.exibitionResult}>
                <ResultIMC messageResult={messageIMC} resultIMC={imc}/>
                <TouchableOpacity
                    onPress={()=>validatorImc()}
                    style={styles.buttonCalculator}
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>    
                </TouchableOpacity>
            </View>
        }

        <FlatList
            style={styles.listImcs}
            data={imcList.reverse()}
            renderItem={({item})=>{
                return(
                    <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>Resultado IMC =</Text>
                        {item.imc}
                    </Text>
                )
            }}
            keyExtractor={(item)=>{
                item.id
            }}
        />
        </View>
    )
}