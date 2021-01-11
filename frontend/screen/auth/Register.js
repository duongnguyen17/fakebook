
import React, {useState} from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import { Input } from 'react-native-elements'
import {register} from '../../../backend/ListAPIs'

function Register (props) {
    const [phoneNum, setPhoneNum] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [uuid, setUuid] = useState('1234567890')

    const handleRegister = async()=>{
        const response = await register(phoneNum, password, uuid)

        if (response.code===1000) {
            try{               
                setErr('Register Success')
                props.navigation.navigate('Login', {
                    phonenumber: phoneNum,
                    password: password
                })
            } catch{err => setErr(err)}
        }
        else{
            setErr(response.message)
        }
    }


    return (
        <>
            <View style={styles.body}>
                

                <Input placeholder="Phone" onChangeText={text => setPhoneNum(text)} />
                
                <Input placeholder="Password" secureTextEntry={true} onChangeText={pass => setPassword(pass)}/>
                <Text style={{color: 'red', alignSelf:'center'}} >{err}</Text>
                <Button onPress={handleRegister} style={{backgroundColor:"#1a73e8", marginTop: '50%'}} mode="contained" uppercase={false} title='Register'/>
                <Text 
                    onPress={()=>props.navigation.navigate("Login")}
                    style={{
                        color: "#1a73e8",
                        alignSelf: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                        marginTop: 20
                    }}
                >Have an account ? Login</Text>
            </View>
        </>
    )
}

export default Register

const styles = StyleSheet.create({

    body: {
        paddingTop: '25%',
        height: '100%',
        padding: 20,
        backgroundColor: "#ffffff"
    },
});