// "상태 관리하기 위해 context를 쓴다.
import {createContext} from "react";

export const UserContext = createContext({
    users: [],
    insertUsers: (user)=>{},
    updateUsers: (user)=>{},
  });