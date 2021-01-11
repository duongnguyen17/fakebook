
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Landing from './frontend/screen/auth/Landing'
import Register from './frontend/screen/auth/Register'
import Login from './frontend/screen/auth/Login'
import Home from './frontend/screen/Main'
import Messenger from './frontend/screen/messenger/Messenger'
import CreatePost from './frontend/screen/create_post/CreatePost'
import Search from './frontend/screen/search/Search'
import Profile from './frontend/screen/user_profile/Profile'
import ChangeInfoAfterSignup from './frontend/screen/auth/ChangeInfoAfterSignup'
import AllFriends from './frontend/screen/friend/AllFriends'
import Request from './frontend/screen/friend/Request'
import Suggestion from './frontend/screen/friend/Suggestion'

const Stack =createStackNavigator();

export default function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ChangeInfoAfterSignup" component={ChangeInfoAfterSignup}/>

        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Messenger" component={Messenger}  options={{headerShown: false}} />
        <Stack.Screen name="CreatePost" component={CreatePost} options={{headerShown: false}}/>
        <Stack.Screen name="Search" component={Search}  options={{headerShown: false}}/>
        <Stack.Screen name = "Profile" component ={Profile} options={{headerShown: false}}/>
        <Stack.Screen name ="AllFriends" component={AllFriends} />
        <Stack.Screen name ="Request" component={Request}/>
        <Stack.Screen name="Suggestion" component={Suggestion}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}