
import React from 'react';
import {
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Text,Card} from 'react-native-paper';
const Home1=()=>{
    return (
        <View  style={{flex:1,backgroundColor:'white',paddingHorizontal:20,paddingTop:50}}>
            <Text variant='headlineSmall'>
                Hello Farmer
            </Text>
            {/* <Card style={{marginTop:20,}}>
                <Card.Content>
                    <Text variant='bodyMedium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et nesciunt doloremque. Commodi aperiam architecto unde voluptatibus soluta! Totam quas vitae quis natus porro qui quidem dolores autem veniam sed!</Text>
                </Card.Content>
            </Card> */}
            <Text variant='headlineSmall' style={{paddingTop:20,textAlign:'center'}}>FAQ</Text>
        <ScrollView style={{flex:1,}}>
        <Card style={{marginTop:20}}>
            <Card.Content>
                <Text variant='bodyLarge' style={{fontWeight:'bold' }}>1. What is this app, and how does it work?</Text>
                <Text variant='bodyMedium'>This app identifies plant diseases from photos, offering disease information, treatment recommendations, and the option to connect with specialists for farmers.</Text>
            
            </Card.Content>
        </Card>
        <Card style={{marginTop:20}}>
            <Card.Content>
                <Text variant='bodyLarge' style={{fontWeight:'bold' }}>2. How do I take clear and effective photos of my plants for disease identification?</Text>
                <Text variant='bodyMedium'>For clear images, use good lighting, focus on affected areas, hold your phone steady, and remove any obstructions.</Text>
            
            </Card.Content>
        </Card>
        <Card style={{marginTop:20,marginBottom:20}}>
            <Card.Content>
                <Text style={{fontWeight:'bold' }}variant='bodyLarge'>3. Do I need internet connection to use the app?</Text>
                <Text variant='bodyMedium'>An internet connection is necessary for the uploading photo, but basic features like scanning and accessing stored data can be used offline.</Text>      
            </Card.Content>
        </Card>
        </ScrollView>
        </View>
    );
}
export default Home1;