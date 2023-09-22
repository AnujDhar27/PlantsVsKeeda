import React from 'react';
import {View} from 'react-native';
import {Text,Avatar,Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
const Profile=(props)=>{
    const handleSignOut=()=>{
        auth()
        .signOut()
        .then(()=>props.navigation.navigate('Login'))
    }
    const user=auth().currentUser;
    const phnum=user?.phoneNumber;
return(

<View style={{flex:1,paddingHorizontal:20,backgroundColor:'white'}}>
    <Text style={{textAlign:'center',paddingTop:50,}} variant='headlineLarge'>
        Profile
    </Text>
    <Avatar.Image size={150} style={{alignSelf:'center',marginTop:50}} source={require('../src/farmer.png')}/>
<Text variant='titleLarge' style={{textAlign:'center',marginTop:40}}>जय जवान जय किसान </Text>
<Text variant='titleLarge' style={{textAlign:'center',marginTop:20,}}>Phone Numer: {phnum}</Text>
<Button mode='contained' style={{marginTop:20,marginLeft:20,marginRight:20}} onPress={handleSignOut}>Sign Out</Button>
</View>
);
}
export default Profile;