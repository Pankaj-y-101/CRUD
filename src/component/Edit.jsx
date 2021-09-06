import React, { useState,useEffect } from "react";
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
      marginLeft:'555px',
      width:'15%',
      marginTop:'15px'
    }
  }
})


export default function Edit() {
const [first_name,setfirstName]=useState('');
const [last_name,setlastName]=useState('');
const [email,setEmail]=useState('');
const [states,setState]=useState('');
const [city,setCity]=useState('');
const [pincode,setPincode]=useState('');

useEffect(() => {
setfirstName(localStorage.getItem('FirstName'));
setlastName(localStorage.getItem('LastName'));
setEmail(localStorage.getItem('Email'));
setState(localStorage.getItem('State'));
setCity(localStorage.getItem('City'));
setPincode(localStorage.getItem('Pincode'));
},[])

const editUserData=()=>{
  console.log(first_name);
  console.log(last_name);
  console.log(email);
  console.log(states);
  console.log(city);
  console.log(pincode);
   axios.get(`https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?param1=${email}&param2=${first_name}&param3=${last_name}&param4=${pincode}&param5=${city}&param6=${states}`)
}

  const classes=useStyles();

 return(
  <div>
  <div>
  <FormGroup className={classes.container} >
    
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input id="my-input" value={first_name} onChange={(e)=>setfirstName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input" required={true}>Last Name</InputLabel>
                <Input id="my-input" value={last_name} onChange={(e)=>setlastName(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input id="my-input" value={email} disabled={true} onChange={(e)=> setEmail(e.target.value)} />
            </FormControl>
            <FormControl>
            <InputLabel htmlFor="grouped-native-select" required={true}>State</InputLabel>
        <Select native defaultValue="" value={states} onChange={(e)=>setState(e.target.value)} id="grouped-native-select">
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
                <Input  id="my-input" value={city} onChange={(e)=>setCity(e.target.value)} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Pincode</InputLabel>
                <Input  id="my-input" value={pincode} onChange={(e)=>setPincode(e.target.value)} />
            </FormControl>
            
        </FormGroup>     
        <span className={classes.btn}>
                <Button type='submit' variant="contained" onClick={editUserData} component={Link} to='/home' color="primary">Edit</Button>
                <Button variant="contained" component={Link} to='/home' >Cancel</Button>
            </span>            
  </div>
  </div>
);
}