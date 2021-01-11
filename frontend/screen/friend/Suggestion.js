import React, {useState, useEffect} from 'react'
import { View, StyleSheet} from 'react-native'
import {getListSuggestedFriends} from '../../../backend/ListAPIs'
import AsyncStorage from '@react-native-community/async-storage'
import { ScrollView } from 'react-native-gesture-handler'

import RequestCard from '../../component/RequestCard'

function AllFriends(props){
    const [users, setUsers] = useState([])
    const [index, setIndex] = useState(0)
    const count = 10

    useEffect(() => {
        async() =>{
            const token = await AsyncStorage.getItem('token')
            const resUsers = await getListSuggestedFriends(token, index, count)
            setUsers(resUsers.data.list_users)
        }
    }, [])
    return (
        <View style={styles.container}>    
            <ScrollView>
                <Text>Những người bạn có thể biết</Text>
                {users.map((user)=>{
                    <RequestCard user={user}/>
                })}
            </ScrollView>
        </View>
    )
}

export default AllFriends

const styles=StyleSheet.create({
    container:{},

})