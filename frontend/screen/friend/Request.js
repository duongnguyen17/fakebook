import React, {useState, useEffect} from 'react'
import { View, StyleSheet} from 'react-native'
import SearchBar from 'react-native-elements'
import {getRequestedFriends} from '../../../backend/ListAPIs'
import AsyncStorage from '@react-native-community/async-storage'
import { ScrollView } from 'react-native-gesture-handler'

import RequestCard from '../../component/RequestCard'

function AllFriends(props){
    const [numRequest, setNumRequest] = useState()
    const [request, setRequest] = useState([])
    const [index, setIndex] = useState(0)
    const count = 10
    useEffect(() => {
        async() =>{
            const token = await AsyncStorage.getItem('token')
            const resRequest = await getRequestedFriends(token, index, count)
            setRequest(resRequest.data.request)
            setNumRequest(resRequest.data.total)
        }
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View>
                        <Text>Lời mời kết bạn</Text>
                        <Text>{numRequest}</Text>
                    </View>
                    <Text style={{color:'#5d99c6', fontSize:20}} >Sort</Text>
                </View>
                <ScrollView>
                    {request.map((request)=>{
                        <RequestCard request={request}/>
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

export default AllFriends

const styles=StyleSheet.create({
    container:{},

})