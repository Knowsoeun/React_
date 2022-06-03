import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import {Users} from "./Login/User";
import { useSelector } from "react-redux";

const Page404 = () =>{
    const navigate = useNavigate();
    // const {users} = useContext(UserContext);
    const isLogin =useSelector((state)=> state.users.isLogin);
    useEffect(()=> {
        // const id = localStorage.getItem("id");
        // const findUser = Users.find((data) => data.id === Number(id));
        // if (!findUser){
        //     navigate("/login");
        // }else{
        //     navigate("/");
        // }
        if (!isLogin){
            navigate("/");
        }
}, []);
    return <></>;
};

export default Page404;