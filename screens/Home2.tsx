import React from 'react';
import {View,FlatList,Image,Linking} from 'react-native';
import { useEffect,useState } from 'react';
import {Text,Button,Card,} from 'react-native-paper';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const Home2=(props)=>{
    const [userDetails,setUserDetails]=useState([]);
    useEffect(()=>{
    firestore()
    .collection('Farmer')
    .get()
    .then(querySnapshot=>{
        const data=[];
        querySnapshot.forEach(documentSnapshot=>{
            if(documentSnapshot.data().imageUrl)
            {
                data.push({
                    id:documentSnapshot.id,
                    ...documentSnapshot.data(),
                })
                
            }
            setUserDetails(data);
            console.log(data)
            
        })

    })
    },[])

    return(
        <View style={{flex:1,paddingHorizontal:20}}>
            <Text variant='headlineLarge' style={{paddingTop:50,textAlign:'left'}}>
                Hello
            </Text>
            <Text style={{textAlign:'center',paddingTop:20,} }variant='headlineSmall'>Farmers in need of your help:</Text>
            <FlatList
      data={userDetails}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
       
        <Card style={{marginTop:20,paddingBottom:10,}}>
        <Card.Content>
                <Image
                 source={{uri:item.imageUrl}}
                 style={{flex:1,padding:50}}
                 resizeMode='contain'
                />
                <Text variant='bodyLarge' style={{textAlign:'left',paddingTop:20,paddingLeft:20}}>Detected Disease: {item.disease}</Text>
                <Text variant='bodyLarge' style={{textAlign:'left',paddingBottom:20,paddingLeft:20}}> Cure: {item.cure}</Text>
                <Card.Actions>
                    <Button onPress={()=>Linking.openURL(`tel:${item.phn}`)}>Contact Farmer</Button>
                </Card.Actions>
            </Card.Content>
        </Card>

        
      )}

       />
        </View>
    );
}
export default Home2;