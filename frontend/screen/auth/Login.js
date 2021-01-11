import React, {useState} from 'react'
import { View, Button, StyleSheet, Text, ToastAndroid  } from 'react-native'
import { Input } from 'react-native-elements'
import {login} from '../../../backend/ListAPIs'
import AsyncStorage from '@react-native-community/async-storage'

function Login (props) {
    const [phoneNum, setPhoneNum] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')


    const handleLogin = async()=>{
        const response = await login(phoneNum, password)
        //console.log(response.data.code)
        // ToastAndroid.show(response.data.code.toString(), ToastAndroid.SHORT);
        if (response.data.code===1000) {
            try{
                await AsyncStorage.clear()
                await AsyncStorage.setItem('token', response.data.data.token)
                await AsyncStorage.setItem('userid', response.data.data.id)
                await AsyncStorage.setItem('avatar', response.data.data.avatar)
                await AsyncStorage.setItem('username', response.data.data.username)
                global.token=response.data.data.token
                global.userid=response.data.data.id
                if(!response.data.data.username){
                    props.navigation.navigate('ChangeInfoAfterSignup')
                }
                else{props.navigation.navigate("Home")}
            } catch(error){
                setErr(error.message);
            }
        }
        else{
            setErr(response.data.message)
        }
    }


    return (
        <>
            <View style={styles.body}>
                

                <Input placeholder="Phone" onChangeText={text => setPhoneNum(text)} />
                
                <Input placeholder="Password" secureTextEntry={true} onChangeText={pass => setPassword(pass)}/>
                <Text style={{color: 'red', alignSelf:'center'}} >{err}</Text>
                <Button onPress={handleLogin} style={{backgroundColor:"#1a73e8", marginTop: '50%'}} mode="contained" uppercase={false} title='login'/>
                <Text 
                    onPress={()=>props.navigation.navigate("Register")}
                    style={{
                        color: "#1a73e8",
                        alignSelf: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginTop: 20
                    }}
                >Create a new account</Text>
            </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({

    body: {
        paddingTop: '25%',
        height: '100%',
        padding: 20,
        backgroundColor: "#ffffff"
    },
});