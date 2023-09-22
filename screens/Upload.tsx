import React from 'react';
import {View,Image} from 'react-native';
import {useState} from 'react';
import {Text,Button, Card} from 'react-native-paper';
import { launchImageLibrary,launchCamera } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

// import * as tf from '@tensorflow/tfjs-react-native';

const Upload=()=>{
    const db=firestore();
    const user=auth().currentUser;
    
    const [selectedImage,setSelectedImage]=useState(null);
    const [disease,setDisease]=useState('');
    const [cure,setCure]=useState('');
    const handleSubmit=async()=>{
        setDisease('Rotten Tomato')
        setCure('Pesticide')
        const dis='Rotten Tomato'
        const cur='Pesticide'
        const userCol=db.collection('Farmer').doc(user?.uid);
        userCol.set({'disease':dis,'cure':cur,'sci':0,'phn':''})
        if(selectedImage)
        {
            const fileRef=storage().ref(`/farmer/${user?.uid}/pic`);
            await fileRef.putFile(selectedImage);
            const fileUrl=await fileRef.getDownloadURL();
            const phn=user?.phoneNumber;
            console.log(fileUrl);
            await userCol.update({'imageUrl':fileUrl,'phn':phn})
        }
        console.log('pressed')  
    }
    const handleScientist=()=>{
        console.log('pressed')
        const userCol=db.collection('Farmer').doc(user?.uid);
        userCol.update({'sci':1})
    }
    // const handleSubmit= async()=>{
    //         try{
    //             const model=await tf.fetch('../src/tm-my-image-model/model.json')
    //             const image=selectedImage;
    //             if(image){
    //             const imageTensor=tf.decodeJpeg(image);
    //             const predictions=await model.predict(imageTensor);
    //             const predictedClassLabel = predictions.argMax(1);
    //             console.log(predictedClassLabel);     
    //         }

    //         }
    //         catch(error)
    //         {
    //             console.log('error')
    //         }
    // }
    const handleCamera=()=>{
        const options={
            mediaType:'photo',
            includeBase64:false,
            maxHeight:2000,
            maxWidth:2000,
        };
        launchCamera(options,(response)=>{
            if(response.didCancel)
            {
                console.log('user cancelled image picker')
            }
            else if(response.errorMessage)
            {
                console.log('Image picker error',response.errorMessage)
            }
            else{
                let imageUri=response.uri||response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                console.log(imageUri);
            }
        })
    }
    const handleGallery=()=>{
        const options={
            mediaType:'photo',
            includeBase64:false,
            maxHeight:2000,
            maxWidth:2000,
        };
        launchImageLibrary(options,(response)=>{
            if(response.didCancel)
            {
                console.log('User cancelled image picker');
            }
            else if(response.errorMessage)
            {
                console.log('Image picker error',response.errorMessage);
            }
            else{
                let imageUri=response.uri||response.assets?.[0]?.uri;
                setSelectedImage(imageUri)
                console.log(imageUri)
            }
        })
    }
return(
<View style={{flex:1,paddingHorizontal:20,backgroundColor:'white'}}>
    <Text  style={{paddingTop:50,textAlign:'center',paddingBottom:10,}} variant='headlineSmall'>
        Upload the photo of your crop
    </Text>
    {disease&&
    (<Card style={{paddingTop:20,}}>
            <Card.Content>
                <Image
                 source={{uri:selectedImage}}
                 style={{flex:1,padding:150}}
                 resizeMode='contain'
                />
                <Text variant='bodyLarge' style={{textAlign:'left',paddingTop:20,paddingLeft:20}}>Detected Disease: {disease}</Text>
                <Text variant='bodyLarge' style={{textAlign:'left',paddingBottom:20,paddingLeft:20}}> Cure: {cure}</Text>
                <Card.Actions>
                    <Button onPress={handleScientist}>Contact Scientist</Button>
                </Card.Actions>
            </Card.Content>
        </Card>
    )
    }
    {
        !disease&&(
            selectedImage&&(
            <Image
            source={{uri:selectedImage}}
            style={{flex:1,paddingTop:20,paddingBottom:20,}}
            resizeMode='contain'
            />
            )
        )
    }
    {!disease&&(<Button mode='contained-tonal' icon='file-image'  style={{marginTop:10,marginRight:60,marginLeft:60,paddingTop:10,paddingBottom:10}} onPress={handleGallery}>Gallery</Button>)}
    {!disease&&(<Button mode='contained-tonal' icon='camera' style={{marginTop:20,marginRight:60,marginLeft:60,paddingTop:10,paddingBottom:10,}} onPress={handleCamera}>Camera</Button>)}
    {!disease&&(<Button mode='contained-tonal' disabled={selectedImage===null?true:false} icon='upload' style={{marginTop:20,marginRight:60,marginLeft:60,paddingTop:10,paddingBottom:10,marginBottom:20,}} onPress={handleSubmit}>Submit</Button>)}
</View>
);
}
export default Upload;