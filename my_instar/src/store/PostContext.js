import {createContext} from "react";

export const PostContext = createContext({
    posts: [],
    insetPost: (post)=> {},
    deletePost: (postId) => {},
});