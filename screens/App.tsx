
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './Login';
import Home1 from './Home1';
import React from 'react';
import SignUp from './SignUp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camera from './Camera';
import Profile from './Profile';
import Home2 from './Home2';

const Stack = createStackNavigator();
const Tab=createBottomTabNavigator();
const BotTab=()=>{
  return(
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home1} options={{headerShown:false}}/>
        <Tab.Screen name='Camera' component={Camera} options={{headerShown:false}}/>
        <Tab.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
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
        <Stack.Screen name ='Home2' component={Home2} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;