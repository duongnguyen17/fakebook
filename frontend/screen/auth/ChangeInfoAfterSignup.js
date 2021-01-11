//thay đổi thông tin sau khi đăng nhập

import React , {useState, useEffect} from 'react'
import {
    Button,
    Text,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from 'react-native'
import { Input } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage'
import {changeInfoAfterSignup} from '../../../backend/ListAPIs'

function ChangeInfoAfterSignup (props) {
    const [username, setUsername] = useState('')
    const [avatar, setAvatar] = useState([])
    const [err, setErr] = useState('')

    const onChangeAvatar= e =>{
        setAvatar([...avatar, e.target.file[0]])
    }
    useEffect(async() => {
        const token = await AsyncStorage.getItem('token')
    }, [])
    

    const submit=()=>{
        if(validateState()){
            setUsername('')
        }
        else{
            async()=>{
                const response = await changeInfoAfterSignup({token:token, username:username, avatar:avatar})
                if (response.status===200) {
                    try{
                        console.log(response.data)
                        await AsyncStorage.setItem('name', response.data.username)
                        await AsyncStorage.setItem('avatar', response.data.avatar)
                    } catch{err => console.log(err)}
                    
                     props.navigation.navigate("Home")
                }
                else{
                    setErr(response.data.message)
                }
            }
        }
    }

    const validateState=()=>{
        let userName=username
        let isValid=true
        if(!userName){
            isValid=false
            setErr('Please enter your username!')
        }
        else if(typeof userName !=="undefined"){
            const re = /^\S*$/;//kí tự đặc biệt
            if(userName.length<6||userName.length>10){
                isValid=false
                setErr('Usename must be [6,10] character!')
            }
            else if(!re.test(userName)){
                isValid=false
                setErr('Username must not have special character!')
            }
        }
        return isValid
    }

    return(
        <SafeAreaView style ={styles.container}>
            <Text>Wellcome to Fakebook</Text>
            <View style={styles.form}>
                <Input placeholder ="Username" onChangeText={text=>setUsername(text)}/>
                <Text>{err}</Text>
                <View>
                    <View style={styles.avatar_border}>
                        <Image source={require=('../../../assets/user.png')}/>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Button title="Take a photo" onPress={null}/>
                        <Button title="Choose a photo" onPress={null}/>
                    </View>
                </View>   
            </View>
            <Button title='Home' onPress={(state)=>submit()}/>
        </SafeAreaView>
    )

}

export default ChangeInfoAfterSignup

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        height:'80%',
        width: '80%',
        justifyContent:'space-between',
        alignItems:'center'
    }
})