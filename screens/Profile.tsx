import React from 'react';
import {View} from 'react-native';
import {Text,Avatar,Button} from 'react-native-paper';
const Profile=()=>{
return(
<View style={{flex:1,paddingHorizontal:20,backgroundColor:'white'}}>
    <Text style={{textAlign:'center',paddingTop:50,}} variant='headlineLarge'>
        Profile
    </Text>
    <Avatar.Image size={150} style={{alignSelf:'center',marginTop:50}} source={require('../src/farmer.png')}/>
<Text variant='titleLarge' style={{textAlign:'center',marginTop:40}}>Name: Lorem Ipsum</Text>
<Text variant='titleLarge' style={{textAlign:'center',marginTop:20,}}>Phone Numer: 9999999999</Text>
<Button mode='contained' style={{marginTop:20,marginLeft:20,marginRight:20}}>Sign Out</Button>
</View>
);
}
export default Profile;