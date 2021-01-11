// Import react
import React from 'react'

// Import react-native components
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native'

// Import react-native-vector-icons
// from "https://github.com/oblador/react-native-vector-icons"
import Icon from 'react-native-vector-icons/FontAwesome5'



function Header(props) {

    const goSearch=()=>{
        global.goSearch()
    }
    return(
      <View style={styles.header_inner}>
        <View style={styles.header}>
          <Text style={styles.text}>
            {props.name}
          </Text>
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={"#ccd0d5"}
            onPress={()=>goSearch()}
            style={styles.search_icon_box}>
            <Icon name="search" size={22} color="#000000" />
          </TouchableHighlight>
        </View>
      </View>
    )
}

export default Header

const styles = StyleSheet.create({
  header_inner:{
    flex:1,
    height: 60,
  },
  header: {
    flex:1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',

  },
  text:{
    fontSize:25,
    fontWeight:'bold',
  },
  search_icon_box: {
    width:35,
    height: 35,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})