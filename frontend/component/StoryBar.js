//thanh story

import React, {useState} from 'react'
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Animated, { Easing } from 'react-native-reanimated'

const { Value, timing } = Animated

import StoryCard from './StoryCard'

function StoryBar(props) {

    const [scroll_x, setScroll_x] = useState(new Value(0))

    _onScroll=(e) =>{
        const new_x_scroll_value = e.nativeEvent.contentOffset.x
        setScroll_x( new Value(new_x_scroll_value))
    }

    // personal card container
    const _card_width = scroll_x.interpolate({
        inputRange:[0, 100],
        outputRange:[100, 50],
        extrapolate:'clamp'
    })

    const _card_height = scroll_x.interpolate({
        inputRange:[0, 100],
        outputRange:[170, 50],
        extrapolate:'clamp'
    })

    const _card_position_top = scroll_x.interpolate({
        inputRange:[0, 100],
        outputRange:[0, 60],
        extrapolate:'clamp'
    })

    const _card_position_left = scroll_x.interpolate({
        inputRange:[0, 100],
        outputRange:[10, 0],
        extrapolate:'clamp'
    })
    const _card_border_left_radius = scroll_x.interpolate({
        inputRange:[0, 100],
        outputRange:[16, 0],
        extrapolate:'clamp'
    })

    //image container
    const _image_container_height = scroll_x.interpolate({
        inputRange: [0, 100],
        outputRange: [100, 40],
        extrapolate: 'clamp',
      })
      const _image_container_margin = scroll_x.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 4],
        extrapolate: 'clamp',
      })
      const _image_container_border_radius = scroll_x.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 40],
        extrapolate: 'clamp',
      })
  
      // cta container
      const _cta_container_padding_top = scroll_x.interpolate({
        inputRange: [0, 100],
        outputRange: [20, -20],
        extrapolate: 'clamp',
      })
      const _cta_container_opacity = scroll_x.interpolate({
        inputRange: [0, 50],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      })
  
      // icon 
      const _icon_scale = scroll_x.interpolate({
        inputRange: [0, 100],
        outputRange: [1, 0.6],
        extrapolate: 'clamp',
      })
      const _icon_position_top = scroll_x.interpolate({
        inputRange: [0, 100],
        outputRange: [-15, -28],
        extrapolate: 'clamp',
      })
      const _icon_position_right = scroll_x.interpolate({
        inputRange: [0, 100],
        outputRange: [33, -3],
        extrapolate: 'clamp',
      })

    return (
      <View style={styles.root}>
          <View style={styles.container}>
            <Animated.View
                style={[
                    styles.personal_card_container,
                    {
                        width: _card_width,
                        height: _card_height,
                        top: _card_position_top,
                        left: _card_position_left,
                        borderTopLeftRadius: _card_border_left_radius,
                        borderBottomLeftRadius: _card_border_left_radius
                    }
                ]}
            >
                {/* Image container */}
                <Animated.View
                    style={[
                        styles.image_container,
                        {
                            height: _image_container_height,
                            margin: _image_container_margin,
                            borderRadius: _image_container_border_radius
                        }
                    ]}
                >
                    <Image source={{uri:"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}} style={styles.image}/>
                </Animated.View>
                {/* Call to action */}
                <Animated.View style={styles.cta_container}>
                    <Animated.Text
                        style={[
                            styles.text,
                            {
                                paddingTop: _cta_container_padding_top,
                                opacity: _cta_container_opacity
                            }
                        ]}
                    >
                        Create a{"\n"} story
                    </Animated.Text>
                    {/* icon */}
                    <Animated.View
                        style={[
                            styles.icon_container,
                            {
                                transform: [{scale: _icon_scale}],
                                top:_icon_position_top,
                                right:_icon_position_right
                            }
                        ]}
                    >
                        <Icon name="plus" size={18} color={"#ffffff"}/>
                    </Animated.View>
                </Animated.View>
            </Animated.View>
            <ScrollView
                style={styles.scroll_view}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                onScroll={_onScroll}
                scrollEventThrottle={16}
            >
                <View style={styles.fake_card_ghost}/>
                <StoryCard name={"Duong Nguyen"} 
                  imageUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}
                  avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}
                  />
                  <StoryCard name={"Duong Nguyen"} 
                  imageUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}
                  avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}/>
                  <StoryCard name={"Duong Nguyen"} 
                  imageUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}
                  avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}/>
                  <StoryCard name={"Duong Nguyen"} 
                  imageUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}
                  avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}/>
                  <StoryCard name={"Duong Nguyen"} 
                  imageUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}
                  avatarUrl={"https://ctt-sis.hust.edu.vn/Content/Anh/anh_20173069.JPG"}/>
                
            </ScrollView>
          </View>
      </View>
    )
}

export default StoryBar

const styles = StyleSheet.create({
  root:{
    height: 190,
    backgroundColor:'#ffffff',
    justifyContent:'center',
    alignContent:'center'
  },
  container: {
    position:'relative',
  },  
  personal_card_container: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    zIndex:10,
    elevation: 10,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#cccccc'
  },
  image_container: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    flex:1, 
    width:null, 
    height: null
  },
  cta_container: {
    position:'relative'
  },
  text: {
    textAlign: 'center',
    fontSize: 14, 
    fontWeight: 'bold'
  },  
  icon_container: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#3578E5',
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },  
  scroll_view: {
    flexDirection: 'row',
  },

  fake_card_ghost: {
    backgroundColor:'white',
    marginLeft: 10,
    borderWidth: 0,
    width: 100,
    height: 170
  },
})