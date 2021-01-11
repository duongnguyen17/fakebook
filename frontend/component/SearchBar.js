import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

function SearchBar(props){

  return(   
    <View style={styles.header_inner}>              
      <Text style={{ color: "#1a73e8", fontSize: 26, fontWeight: 'bold' }}> fakebook  </Text>
      <View style={styles.search_messenger}>
          <TouchableHighlight
              activeOpacity={1}
              underlayColor={"#ccd0d5"}
              onPress={props.gotoSearch}
              style={styles.search_icon_box}>
              <Icon name="search" size={22} color="#000000" />
          </TouchableHighlight>
          <TouchableHighlight
              activeOpacity={1}
              underlayColor={"#ccd0d5"}
              onPress={props.gotoMessenger}
              style={styles.messenger_icon_box}>
              <Icon name="facebook-messenger" size={25} color="#000000" />
          </TouchableHighlight>
      </View>
    </View>
  )
}
export default SearchBar

const styles = StyleSheet.create({
    header_inner: {
      flex:1,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    search_messenger: {
      width:90,
      height:40,
      flexDirection: 'row',
      justifyContent: "space-between"
    },
    search_icon_box: {
      width:40,
      height: 40,
      borderRadius: 40,
      backgroundColor: '#e4e6eb',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    messenger_icon_box:{
      width:40,
      height: 40,
      borderRadius: 40,
      backgroundColor: '#e4e6eb',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
  })