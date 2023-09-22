
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './Login';
import Home1 from './Home1';
import React from 'react';
import SignUp from './SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Upload from './Upload';
import Profile from './Profile';
import Home2 from './Home2';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import Profile2 from './Profile2';
const Stack = createStackNavigator();
const Tab= createMaterialBottomTabNavigator();
 
const BotTab=()=>{
  return(
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color})=>{
          let iconName;
          if(route.name==='Home')
          {
            iconName=focused
            ?'home'
            :'home-outline'
          }
          else if(route.name==='Upload')
          {
            iconName=focused
            ?'upload'
            :'upload-outline'
          }
          else if(route.name==='Profile')
          {
            iconName=focused
            ?'account'
            :'account-outline'
          }
          return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name='Home' component={Home1} />
      <Tab.Screen name='Upload' component={Upload} />
      <Tab.Screen name='Profile' component={Profile}  />
    </Tab.Navigator>
  )
}

const BotTab2=()=>{
  return(
      <Tab.Navigator
      screenOptions={({route})=>({
        tabBarIcon:({focused,color})=>{
          let iconName;
          if(route.name==='Home')
          {
            iconName=focused
            ?'home'
            :'home-outline'
          }
          else if(route.name==='Profile')
          {
            iconName=focused
            ?'account'
            :'account-outline'
          }
          return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name='Home' component={Home2} />
      <Tab.Screen name='Profile' component={Profile2}  />
    </Tab.Navigator>
  )
}

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Login' component={Login} options={{headerShown:false}}/>  
        <Stack.Screen name ='SignUp' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name ='Home1' component={BotTab} options={{headerShown:false}}/>
        <Stack.Screen name ='Home2' component={BotTab2} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;