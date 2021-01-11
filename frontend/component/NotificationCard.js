// Import react
import React from 'react'

// Import react-native components
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight, ToastAndroid
} from 'react-native'

// Import react-native-vector-icons
// from "https://github.com/oblador/react-native-vector-icons"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


import PropTypes from 'prop-types';

// Declare component 
class Notification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avatarUrl: '',
      content: '',
      time:''
    };
  }
  
  render(){
    return (

        <TouchableHighlight
            activeOpacity={1}
            underlayColor={"#ccd0d5"}
            onPress={()=>{ToastAndroid.showWithGravity(
              "Test Notifi",
              ToastAndroid.SHORT,
              ToastAndroid.CENTER
            );}}
            
        >
          <View style={styles.notification}>
            <Image styles={styles.image}
              source={{uri: this.props.avatarUrl}}/>
            <View>
                <Text style={styles.content}>
                {this.props.content}
                </Text>
                <Text style={styles.time}>
                {this.props.time}
                </Text>
            </View>
          </View>
          
        </TouchableHighlight>   
    )
  }
}

Notification.propTypes ={
  content: PropTypes.string.isRequired,
  avatarUrl : PropTypes.string.isRequired,
  time : PropTypes.string.isRequired,
}
export default Notification

const styles = StyleSheet.create({
  notification:{
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: "#DDDDDD",
  },
  image:{
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 10
  },
  content:{
    fontWeight: 'bold',
    fontSize: 17
  },
  time:{
    color: 'gray',
    fontSize: 14,
    marginTop: 3
  },

})


// import React, { useState, useEffect, useRef } from 'react'
// import { View, Text, StyleSheet, Image } from 'react-native'
// import { TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler'
// // import { Divider } from 'react-native-paper'
// import Icon from 'react-native-vector-icons/AntDesign'
// import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
// // import ImageView from './ImageView'
// // import AsyncStorage from '../screen/createPost/node_modules/@react-native-community/async-storage';
// // import { likePost, disLikePost } from '../apis/getPost'
// // import { API_URL } from '../apis/Constance'
// // import { getTime } from '../utils/time'
// import RBSheet from 'react-native-raw-bottom-sheet'
// const Notification = () => {
//     const refRBSheet = useRef()
//     return (
//         <View style={{ flexDirection: 'row',justifyContent:'space-between', height: 80, paddingHorizontal: 10, width: '100%' }} >
//             <View style={{flexDirection:'row', width:'95%'}}>
//                 <View style={{alignSelf:'center'}} >
//                     <Image source={require('../pages/Profile/girl.jpg')} style={{ width: 66, height: 66, borderRadius: 33 }} />
//                 </View>

//                 <View style={{ justifyContent: 'center', height: '100%', width: '100%', marginLeft: 10 }}>

//                     <Text style={{}} >
//                         <Text style={{ fontWeight: 'bold' }} >Namee </Text>
//                     commented on your post

//                 </Text>
//                     <Text style={{ fontSize: 13, color: "#888" }}>Fri at 8:30</Text>
//                 </View>
//             </View>
//             <TouchableOpacity style={{ width:'100%'}} onPress={() => refRBSheet.current.open()} >
//                 <Icon1 name="dots-horizontal" color="black" size={20} style={{}} />
//             </TouchableOpacity>

//             <RBSheet
//                 ref={refRBSheet}
//                 closeOnDragDown={true}
//                 closeOnPressMask={true}
//                 closeOnPressBack={true}
//                 height={160}
//                 customStyles={{
//                     wrapper: {
//                         backgroundColor: "rgba(0,0,0,0.5)",

//                     },
//                     draggableIcon: {
//                         display: 'none'
//                     },
//                     container: {
//                         height: 60,

//                     }
//                 }}
//             >
//                 <View>
                    
//                     <View style={{ height: 50, flexDirection: 'row', paddingLeft: 15, alignItems: 'center', marginTop: 5 }}>
//                         <Icon name="delete" color="black" size={25} />
//                         <Text style={{ fontSize: 16, marginLeft: 15 }}>Delete notifycation</Text>
//                     </View>
//                 </View>
//             </RBSheet>
//         </View>
//     );
// }

// export default Notification;
