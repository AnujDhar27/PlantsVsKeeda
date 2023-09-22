import React from 'react';
import {View,Image} from 'react-native';
import {useState} from 'react';
import {Text,Button} from 'react-native-paper';
import { launchImageLibrary,launchCamera } from 'react-native-image-picker';
const Upload=()=>{
    const [selectedImage,setSelectedImage]=useState(null);
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
    {
        selectedImage&&(
            <Image
            source={{uri:selectedImage}}
            style={{flex:1,paddingTop:20,paddingBottom:20,}}
            resizeMode='contain'
            />
        )
    }
    <Button mode='contained-tonal' icon='file-image'  style={{marginTop:10,marginRight:60,marginLeft:60,paddingTop:10,paddingBottom:10}} onPress={handleGallery}>Gallery</Button>
    <Button mode='contained-tonal' icon='camera' style={{marginTop:20,marginRight:60,marginLeft:60,paddingTop:10,paddingBottom:10,}} onPress={handleCamera}>Camera</Button>
    <Button mode='contained-tonal' disabled={selectedImage===null?true:false} icon='upload' style={{marginTop:20,marginRight:60,marginLeft:60,paddingTop:10,paddingBottom:10,marginBottom:20,}}>Submit</Button>
</View>
);
}
export default Upload;