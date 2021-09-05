import React, { useState } from "react";
import {FormGroup,Select,InputLabel,Input,FormControl,Button,makeStyles} from '@material-ui/core';
import axios from 'axios';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  container: {
      width: '50%',
      margin: '1% 0 0 25%',
      '& > *': {
          marginTop: 15
      }
  },
  btn:{
    '& > *':{
      display:'flex',
      marginLeft:'555px',
      width:'15%',
      marginTop:'15px'
    }
  }
})


export default function Add() {
const [first_name,setfirstName]=useState('');
const [last_name,setlastName]=useState('');
const [email,setEmail]=useState('');
const [states,setState]=useState('');
const [city,setCity]=useState('');
const [pincode,setPincode]=useState('');

const addAllData=()=>{
  console.log(first_name);
  console.log(last_name);
  console.log(email);
  console.log(states);
  console.log(city);
  console.log(pincode);
   axios.post('https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add',{
    'param1':email, 
    'param2':  first_name,
      'param3': last_name,
      'param4':pincode,
        'param5':city,
        'param6':states


   })
}

  const classes=useStyles();

 return(
  <div>
  <div>
  <FormGroup className={classes.container} >
    
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input id="my-input" onChange={(e)=>setfirstName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input id="my-input" onChange={(e)=>setlastName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input id="my-input" onChange={(e)=> setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="grouped-native-select" required={true}>State</InputLabel>
        <Select native defaultValue="" onChange={(e)=>setState(e.target.value)} id="grouped-native-select">
          <option aria-label="None" />
          <optgroup>
            <option>Maharashtra</option>
            <option>Goa</option>
            <option>Delhi</option>
            <option>Gujrat</option>
          </optgroup>
          </Select>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input  id="my-input" onChange={(e)=>setCity(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Pincode</InputLabel>
                <Input  id="my-input" onChange={(e)=>setPincode(e.target.value)} />
            </FormControl>
            
        </FormGroup>     
        <span className={classes.btn}>
                <Button type='submit' variant="contained" onClick={addAllData} component={Link}  to='/home' color="primary">Add</Button>
                <Button variant="contained" >Cancel</Button>
            </span>            
  </div>
  </div>
);
}