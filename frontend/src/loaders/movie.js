import axios from "axios";


export const movieLoader=async({params})=>{
  try {
    const data=await axios({
        url:`${process.env.REACT_APP_BACKEND}/movie`,
        data:{name:params.id},
        method:'post',
    })
    return data.data;
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