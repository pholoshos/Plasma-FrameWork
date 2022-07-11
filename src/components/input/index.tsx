import React, { useState } from "react"
import { SafeAreaView, TextInput,Text, View, StyleSheet, TextInputChangeEventData, NativeSyntheticEvent} from "react-native"
import { textContentType } from "../../modal";

interface IProps {
    placeholder?: string;
    initialValue?: string;
    onChange?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void ;
    label? : string;
    textType? :   textContentType,
    isSecure? : boolean,
    onChangeText? : ((text: string) => void) ;

}
export const Input = ({label,placeholder,initialValue,onChange,textType,isSecure,onChangeText}:IProps) => {
    const [value,setValue] = useState(initialValue);


    return <View style={style.container}>
        <Text>{label}</Text>
        <TextInput onChangeText={onChangeText} secureTextEntry={isSecure} textContentType={textType} onChange={onChange} style={style.textInput}  value={ value} placeholder={placeholder}>

        </TextInput>
    </View>
}
const style = StyleSheet.create({
    container : {
        margin: 4,
        
    },
    textInput: {
        width : '100%',
        height: 40,
        borderColor: 'black',
        borderRadius: 8,
        marginTop : 5,
        borderWidth: 0.3,
        shadowColor: 'black',
        padding: 10
    }
})