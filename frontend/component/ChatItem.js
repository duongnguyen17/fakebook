// Import react
import React from 'react'

// Import react-native components
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import PropTypes from 'prop-types';

// Declare component 
class ChatItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatarUrl: '',
      lastMessage:''
    };
  }

  _renderRightAction = (icon, color, backgroundColor, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0]
    })

    return (
      <Animated.View style={{flex: 1, transform: [{translateX: trans}] }}>
        <RectButton 
          style={[styles.rightAction, { backgroundColor: backgroundColor } ]}
        >
          <Icon name={icon} size={30} color={color} />
        </RectButton>
      </Animated.View>
    )

  }

  _renderRightActions = progress => (
    <View style={{ width: 192, flexDirection: 'row' }}>
      {this._renderRightAction('menu', '#000000', '#eeeeee', 192, progress)}
      {this._renderRightAction('bell', '#000000', '#cccccc', 128, progress)}
      {this._renderRightAction('delete', '#ffffff', '#dd2c00', 64, progress)}
    </View>
  )

  _updateRef = ref => {
    this._swipeableRow = ref
  }

  render(){
    return (
      <Swipeable
        ref={this._updateRef}
        friction={2}
        rightThreshold={40}
        renderRightActions={this._renderRightActions}
      >
        <TouchableHighlight 
          activeOpacity={1}
          onPress={()=>{this.props.goToChatting}}
        >
          <View style={styles.item}>
            <Image
              source={{ uri: this.props.avatarUrl }}
              style={styles.image}
            />
            <View>
              <Text style={styles.name}>
                {this.props.name}
              </Text>
              <Text style={styles.message}>
                {this.props.lastMessage}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    )
  }
}

ChatItem.propTypes ={
  name: PropTypes.string.isRequired,
  avatarUrl : PropTypes.string.isRequired,
  lastMessage : PropTypes.string.isRequired,
}
export default ChatItem

const styles = StyleSheet.create({
  item: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: "#DDDDDD",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17
  },
  message: {
    color: 'gray',
    fontSize: 14,
    marginTop: 3
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 75
  }
})