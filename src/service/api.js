import axios from "axios";

const url='https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch';

export const getUser= async()=>{
      return await axios.get(url);
}