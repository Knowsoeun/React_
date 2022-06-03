import {createContext} from "react";

export const FollowContext = createContext({
    follows: [],
    insetFollow: (followerId)=> {},
});