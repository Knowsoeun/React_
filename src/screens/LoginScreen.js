import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../store/users";


const LoginScreen=()=>{

    const dispatch=useDispatch()
    const [user, setUser] =useState({
        userId:"",
        password:"",
    });

    const onChangeTextHandler=(name, value)=>{
        setUser({
            ...user,
            [name]:value
        });
    };

    const onSubmit = ()=>{
        dispatch(login(user));
    };

    return (
        <View style={styles.form}>
            <TextInput style={styles.inputBox} placeholder="id" onChangeText={(value)=>onChangeTextHandler("id", value)}
            autoCapitalize="none"></TextInput>
            <TextInput style={styles.inputBox} placeholder="password" onChangeText={(value)=>onChangeTextHandler("password", value)} autoCapitalize="none" 
            secureTextEntry={true}></TextInput>
            <Button title="login" onPress={onSubmit}></Button>
        </View>
    );
};

export default LoginScreen;

const styles=StyleSheet.create({
    form: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
    },
    inputBox:{
        borderBottomColor: "gray",
        borderBottomWidth:1,
        marginBottom: 10,
    },
});