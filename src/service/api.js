import axios from "axios";

const url='https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch';

export const getUser= async()=>{
      return await axios.get(url);
}

// const url2='https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add';

// export const addUser= async()=>{
//       return await axios.get(url1);
// }

// const url='https://www.mecallapi.com/api/users';

// export const getUser= async()=>{
//       return await axios.get(url);
// }