import {Table,TableBody, TableCell, TableHead, TableRow,makeStyles,Button} from '@material-ui/core';
import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getUser } from '../service/api'
import axios from 'axios';

const useStyle=makeStyles({
    table:{
        marginTop:'5px'
    },
    thead:{
        '& > *':{
            background:'#1769aa',
            color:'white'
        }
    },
    
})

const Home=()=>{
    const classes=useStyle(); 

    const [users,setUsers]=useState([]);
    useEffect(()=>{  
        getAllUser();
    },[]);
    const getAllUser= async ()=>{
        let response= await getUser();
        console.log(response.data);
        setUsers(response.data.data);
    }

    const loadData=(user)=>{
   console.log(user)
   let {email,first_name,last_name,city,pincode,states}= user;
   localStorage.setItem('Email',email);
   localStorage.setItem('FirstName',first_name);
   localStorage.setItem('LastName',last_name);
   localStorage.setItem('City',city);
   localStorage.setItem('Pincode',pincode);
   localStorage.setItem('State',states)
    }

   const deleteUser=(user)=>{
      axios.get(`https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?param1=${user.email}`);
     alert("Are you sure you want to delete record")
    }
    
    return(
        <> 
        <NavLink to='/add' className={classes.Addrec}>
        <Button style={{color:'blue',fontSize:'19px'}}> + Add record</Button>
        </NavLink>
         <Table className={classes.table}>
         <TableHead>
                <TableRow className={classes.thead}>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Pincode</TableCell>
                <TableCell>State</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Action</TableCell>
               
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map ((user) => (
                    
                        <TableRow>
                             <TableCell>{user.first_name}</TableCell>
                            <TableCell>{user.last_name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.pincode}</TableCell> 
                            <TableCell>{user.states}</TableCell> 
                            <TableCell>{user.city}</TableCell> 
                            <TableCell>
                                <Button variant='contained' onClick={()=>loadData(user)} component={Link} to={`/edit/${user.email}`} style={{marginRight:'5px',borderRadius:'10px', width:'31px',height:'25px'}} color='primary'>Edit</Button>
                                <Button variant='contained' onClick={()=>deleteUser(user)} style={{borderRadius:'10px', width:'31px',height:'25px'}} color='secondary'>Delete</Button>
                            </TableCell> 
                            
                            
                        </TableRow>
                    
                    ))}
                
            </TableBody> 
            
        </Table> 
        </>
    );
}
export default Home;