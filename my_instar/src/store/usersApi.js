import { useParams } from "react-router";
import { Users } from "../components/Login/User";

export const getUserById = async(users, id)=>{
    const findUserById = await users.find((user) => user.id===id);
    return findUserById;
};

export const getUserByUserId = async(users, userId)=>{
    const findUserByUserId=await users.find((user)=> user.userId===userId);
    return findUserByUserId;
}

export const postUser=async(users, user)=> {
    const newUser={...user, userId: user.id, id: Users.length};
    return {...users, newUser};
}

export const loginApi=async(users, user)=>{
    const checkUser =await users.find((data)=>data.userId===user.id && data.password===user.password);
    return {isLogin: checkUser? true: false, user:checkUser};
}
export const checkId = async(users, userId)=>{
    const isCheckId = (await users.find((user) => user.userId===userId))? true: false;
    return isCheckId;
}

export const logoutApi = async (userId)=>{
    return true;
};

export const getUserByKey = async(users, key)=> {
    const findUserByUserId =await users.find((user)=> key.test(user.name));
    return findUserByUserId;
};

export const getPostByKey=async(posts, key, userId)=>{
    try{
        const findPostsByUserId = await posts.filter(
        (  post //
        ) => userId === post.userId || key.text(post.content)
        );
        return findPostsByUserId;
    }catch(error){
        throw error;
    }
};