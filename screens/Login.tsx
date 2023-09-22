
import React from 'react';
import {useState,useEffect} from 'react';
import {View,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {Text,TextInput,Button,SegmentedButtons} from 'react-native-paper';
const Login=(props)=>{
    const [value,setValue]=useState('farmer');
    const [num,setNum]=useState('');
    const [code,setCode]=useState('');
    const [mail,setMail]=useState('');
    const [pass,setPass]=useState('');
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [confirm, setConfirm] = useState(null);
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      if(user){
      if(value==='farmer')
        props.navigation.navigate('Home1')
      if(value==='scientist')
      props.navigation.navigate('Home1')
      }
      return subscriber; // unsubscribe on unmount
    }, []);
  

    const handleOTP=async()=>{
      const confirmation = await auth().signInWithPhoneNumber('+91'+num);
      console.log(confirmation);
      setConfirm(confirmation);
    }
    const handleLogin=async()=>{
      if(value==='farmer')
      {
        try {
          await confirm.confirm(code);
          props.navigation.navigate('Home1');
        } catch (error) {
          console.log('Invalid code.');
        }
      }
        
      else if(value==='scientist'){
        await auth()
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
            icon:'seed-outline',
        },
        {
            value:'scientist',
            label:'Scientist',
            icon:'glasses',
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
    onChangeText={(setNum)}
    />
      )}
    
    {value==='farmer' && (
        <TextInput
        mode='outlined'
        placeholder='Enter OTP'
        label='OTP'
        style={{marginLeft:20,marginRight:20,}}
        keyboardType='numeric'
        value={code}
        onChangeText={setCode}
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
    {value==='farmer'? <Button mode='contained-tonal' style={{marginTop:30,}} disabled={confirm!==null?true:false} onPress={handleOTP}>Send OTP</Button>:null }
    <Button mode='contained' style={{marginTop:30,}} onPress={handleLogin} disabled={value==='farmer'&&code.length!==6?true:false}>Login</Button>
    <TouchableOpacity onPress={handleSignUp}><Text variant='bodyMedium' style={{marginTop:20,textAlign:'center'}}> Dont have an Account? <Text>Sign Up</Text></Text></TouchableOpacity>
    </View>
  )
}
export default Login;