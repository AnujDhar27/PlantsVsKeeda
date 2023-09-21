
import React from 'react';
import {useState,useEffect} from 'react';
import {View,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {Text,TextInput,Button,SegmentedButtons} from 'react-native-paper';
const Login=(props)=>{
    const [value,setValue]=useState('farmer');
    const [num,setNum]=useState('');
    const [otp,setOTP]=useState();
    const [mail,setMail]=useState('');
    const [pass,setPass]=useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;

    const handleLogin=()=>{
      if(value==='farmer')
        props.navigation.navigate('Home1');
      else if(value==='scientist'){
        auth()
        .signInWithEmailAndPassword(mail,pass)
        .then(()=>{
          props.navigation.navigate('Home2');
        })
        .catch(error=>{
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
      }
              
    }
    const handleSignUp=()=>{
        props.navigation.navigate('SignUp');
    }
  return (
    <View style={{flex:1,paddingHorizontal:20,}}>
      <Text variant='headlineSmall' style={{padding:10,textAlign:'center',paddingTop:100,}}>
        Welcome to Plant vs Keeda
      </Text>
      <Text style={{textAlign:'center',paddingTop:20,}} variant='titleLarge'>Login</Text>

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
      {value==='farmer'&&(
        <TextInput
    mode='outlined'
    placeholder='Enter your registered phone number'
    label='Phone Number'
    style={{margin:20,}}
    keyboardType='numeric'
    value={num}
    onChangeText={setNum}
    />
      )}
    
    {value==='farmer' && (
        <TextInput
        mode='outlined'
        placeholder='Enter OTP'
        label='OTP'
        style={{marginLeft:20,marginRight:20,}}
        keyboardType='numeric'
        />
    )}
    
    {value==='scientist'&& ( 
         <TextInput
         mode='outlined'
         placeholder='Enter Email ID'
         label='Email ID'
         style={{margin:20,}}
         value={mail}
         onChangeText={setMail}
         />
    )}
    {value==='scientist'&&(
        <TextInput
        mode='outlined'
        placeholder='Enter password'
        label='Password'
        style={{marginLeft:20,marginRight:20,}}
        value={pass}
        onChangeText={setPass}
        />
    )}

    <Button mode='contained' style={{marginTop:30,}} onPress={handleLogin}>Login</Button>
    <TouchableOpacity onPress={handleSignUp}><Text variant='bodyMedium' style={{marginTop:20,textAlign:'center'}}> Dont have an Account? <Text>Sign Up</Text></Text></TouchableOpacity>
    </View>
  )
}
export default Login;