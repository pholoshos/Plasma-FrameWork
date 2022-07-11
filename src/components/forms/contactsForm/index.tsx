import React from "react"
import { View,StyleSheet } from "react-native"
import {Button, Input} from "../..";

export const ContactForm = () => {
    return <View>
        <View style={style.form} >
            <Input label="Email Address" textType="emailAddress" placeholder="Email Address"></Input>
            <Input label="Phone Number" textType="telephoneNumber" placeholder="Phone Number"></Input>
            <Input label="Postal Address" textType="fullStreetAddress" placeholder="Postal Address"></Input>
            <Button onClick={()=>{}} label="Save"/>
        </View>

    </View>

}

const style = StyleSheet.create({
    form : {
        margin : 20,
    }
})