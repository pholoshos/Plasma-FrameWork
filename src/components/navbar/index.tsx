import { Link } from "@react-navigation/native";
import React from "react"
import { View, Text } from "react-native"
import { info, style } from "../../values";

interface IProps {
    children: string;
    tintColor?: string | undefined;

}
export const Navbar = (props: IProps) => {
    return <View style={style.navbar_container}>
        <View style={style.navbar_children}>
            <Link  to={{screen:'Home'}} style={style.navbar_child}>Home</Link>
            <Link  to={{screen:'Feed'}} style={style.navbar_child}>Feed</Link>
            <Link  to={{screen:'Dashboard'}} style={style.navbar_child}>Dashboard</Link>
            <Link  to={{screen:'Profile'}}  style={style.navbar_child}>Profile</Link>
            <Link  to={{screen:'Settings'}}  style={style.navbar_child}>Settings</Link>
        </View>
    </View>

} 