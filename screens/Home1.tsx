
import React from 'react';
import {
  View,
} from 'react-native';
import {Text,Card} from 'react-native-paper';
const Home1=()=>{
    return (
        <View  style={{flex:1,backgroundColor:'white',paddingHorizontal:20,paddingTop:50}}>
            <Text variant='headlineSmall'>
                Hello Farmer
            </Text>
            <Card style={{marginTop:20,}}>
                <Card.Content>
                    <Text variant='bodyMedium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et nesciunt doloremque. Commodi aperiam architecto unde voluptatibus soluta! Totam quas vitae quis natus porro qui quidem dolores autem veniam sed!</Text>
                </Card.Content>
            </Card>
            <Text variant='headlineSmall' style={{paddingTop:20,textAlign:'center'}}>FAQ</Text>
        <Card style={{marginTop:20,marginLeft:40,marginRight:40,}}>
            <Card.Content >
                <Text variant='bodyMedium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, recusandae eum? Sit rem pariatur perspiciatis cum.!</Text>
            </Card.Content>
        </Card>
        </View>
    );
}
export default Home1;