import React from 'react';
import {KeyboardAvoidingView,Alert} from 'react-native';
import { useState } from 'react';

import auth from '@react-native-firebase/auth';
import {Text,TextInput,Button,SegmentedButtons,IconButton} from 'react-native-paper';

const SignUp=()=>{
    const [value,setValue]=useState('farmer');
    const [name,setName]=useState('');
    const [mail,setMail]=useState('');
    const [pass,setPass]=useState('');
    const [secure,setSecure]=useState(true);
    const handleEye=()=>{
        setSecure(!secure);
    }
    const handleCreate=()=>{
        if(value==='scientist')
        {
            auth()
            .createUserWithEmailAndPassword(mail,pass)
            .then(()=>{
                Alert.alert('Account Created');
            })
            .catch(error=>{
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                  }
              
                  if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  }
              
                  console.error(error);
            })
            console.log(name);
            console.log(mail);
            console.log(pass);
        }
    }
    return(
        <KeyboardAvoidingView style={{paddingHorizontal:20,flex:1,}}>
            <Text style={{textAlign:'center',marginTop:100,}} variant='headlineMedium'>
                Create your Account
            </Text>
            <SegmentedButtons
      value={value}
      onValueChange={setValue}
      style={{marginTop:20,}}
      buttons={[
        {
            value:'farmer',
            label:'Farmer',
            icon:'download',
        },
        {
            value:'scientist',
            label:'Scientist',
        }
      ]}
      />
            <TextInput
            style={{marginTop:30,}}
            mode='outlined'
            label='Name'
            placeholder='Enter your name'
            value={name}
            onChangeText={setName}
            />
            {value==='farmer'&&(
            <TextInput
             style={{marginTop:20,}}
            mode='outlined'
            label='Phone Number'
            placeholder='Enter a valid phone number'
            keyboardType='numeric'
            />
            )}
            {value==='farmer'&&(
            <TextInput
            style={{marginTop:20,}}
            mode='outlined'
            label='OTP'
            placeholder='Enter OTP'
            keyboardType='numeric'
            />
            )}
            {value==='scientist'&&(
            <TextInput
            style={{marginTop:20,}}
            mode='outlined'
            label='Email ID'
            placeholder='Enter Email ID'
           value={mail}
           onChangeText={setMail}
            />
            )}
            {value==='scientist'&&(
            <TextInput
             style={{marginTop:20,}}
             mode='outlined'
            label='Password'
             placeholder='Enter Pasword'
             secureTextEntry={secure}
             value={pass}
             onChangeText={setPass}
             />
            )}
            {value==='scientist'&&(
            <IconButton
            icon={secure===true?'eye-off':'eye'}
             onPress={handleEye}
             style={{position:'absolute',top:385,left:310,zIndex:1}}
             />
            )}
          
            <Button mode='contained' style={{marginTop:30,}} onPress={handleCreate}>Create Account</Button>
        </KeyboardAvoidingView>
    );
}
export default SignUp;