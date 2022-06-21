import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage";
axios.defaults.baseURL="http://192.168.0.62:8000"; // localhost에서 바꿔준다.
export const IMG_PATH="http://192.168.0.62:8000";
const getToken=async()=>{
    return await AsyncStorage.getItem("token");
};

export const customAxios = async(url, method, data)=>{
    const token=await getToken();
    console.log(token)
    const response = await axios({
        url, 
        method,
        data,
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(response)
    return response.data
};

// export const fileAxois=awync(url, method, data)=>{
//     const token=await getToken();
// }