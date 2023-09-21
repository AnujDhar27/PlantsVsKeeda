import React from 'react';
import {View} from 'react-native';
import {Text,Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
const Home2=(props)=>{
     const handleSignOut=()=>{
        auth()
         .signOut()
         .then(() => props.navigation.navigate('Login'));
    }
    return(
        <View style={{flex:1,paddingHorizontal:20}}>
            <Text>
                Hi Scientist
            </Text>
            <Button mode='contained' onPress={handleSignOut}> Sign out</Button>
        </View>
    );
}
export default Home2;