import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    formContext:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:20,
        padding:10,
    },
    formLabel:{
        color:"#000",
        fontSize:18,
        paddingLeft:20,
    },
    formInput:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        margin:12,
        paddingLeft:16,
        paddingTop:14,
        paddingBottom:14,
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#8A2BE2",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:5
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#fff"
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20
    },
    exibitionResult:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
        marginTop:20,
    },
    resultImcItem:{
        fontSize:26,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
    },
    textResultItemList:{
        fontSize:16,
    }
})