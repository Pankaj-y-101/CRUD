import {Table,TableBody, TableCell, TableHead, TableRow,makeStyles,Button} from '@material-ui/core';
import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getUser } from '../service/api'

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
        setUsers(response.data);
    }
    
    return(
        <> 
        <NavLink to='/add' className={classes.Addrec}>
        <Button style={{color:'blue',fontSize:'19px'}}> + Add record</Button>
        </NavLink>
         <Table className={classes.table}>
         {/* <TableHead>
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
                            <TableCell>
                                <Button variant='contained' color='primary'>Edit</Button>
                                <Button variant='contained' color='secondary'>Delete</Button>
                            </TableCell> 
                            
                            
                        </TableRow>
                    
                    ))}
                
            </TableBody>  */}
            <TableHead>
                <TableRow className={classes.thead}>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
               
                </TableRow>
            </TableHead> 
              <TableBody>
                {
                    users.map ((user) => (
                    
                        <TableRow>
                             <TableCell>{user.id}</TableCell>
                            <TableCell>{user.fname}</TableCell>
                            <TableCell>{user.lname}</TableCell>
                            <TableCell>{user.username}</TableCell> 
                            <TableCell>
                                <Button variant='contained' style={{marginRight:'5px'}} component={Link} to={`/edit/${user.id}`} color='primary'>Edit</Button>
                                <Button variant='contained' color='secondary'>Delete</Button>
                            </TableCell> 
                            
                        </TableRow>
                    
                    ))}
                
            </TableBody> 
        </Table> 
        </>
    );
}
export default Home;