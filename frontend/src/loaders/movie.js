import axios from "axios";
import {average} from 'color.js';

export const movieLoader=async({params})=>{
  try {
    const data=await axios({
        url:`${process.env.REACT_APP_BACKEND}/movie`,
        data:{name:params.id},
        method:'post',
    })
    const color=await average(data.data.res.poster, { format: 'hex' })
    return {...data.data,color};
  } catch (error) {
    console.log(error);
  }
}
// export const movieLoader=async({params})=>{
//     try {
//       console.log(params);
//       const data=await axios({
//           url:`${process.env.REACT_APP_BACKEND}/movie`,
//           data:{name:params},
//           method:'post',
//       })
//       return data.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }