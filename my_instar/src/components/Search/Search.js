import { useEffect } from "react";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PostContext } from "../../store/PostContext";
import { selectOtherPost, selectPostsByKey } from "../../store/posts";
import { UserContext } from "../../store/UserContext"
import { selectUserByKey } from "../../store/users";
import Posts from "../Posts/Posts";
import SearchBar from "./SearchBar";

const Search=()=>{
    
    /* const {users}=useContext(UserContext);
    const id=Number(localStorage.getItem("id"));
    const {posts} =useContext(PostContext);
    const otherPosts=()=> {
        return posts.filter((post)=>post.userId!==id);
    };
    const [searchPost, setSearchPost]= useState(otherPosts);

    const [searchKey, setSearchKey]=useState();
    const onSubmitSearch=(e)=>{
        e.preventDefault();
        const reg=new RegExp(searchKey, "g");
        const findUser=users.find((user) => reg.test(user.name));
        const findPosts=posts.filter(
            (
                post//
            ) => findUser.id === post.userId || reg.text(post.content)
        );
        setSearchPost(findPosts);
    }; */
    const dispatch = useDispatch();
    const otherPosts = useSelector((state) => state.posts.otherPosts);
    useEffect(()=> {
        dispatch(selectOtherPost());
    }, []);
    const [searchKey, setSearchKey]= useState();
    const onSubmitSearch = async(e)=>{
        e.preventDefault();
        const findUserId = await dispatch(selectUserByKey(searchKey)).unwrap();
        await dispatch(selectPostsByKey({searchKey, userId: findUserId}));
    };


    return (
        <div>
            <SearchBar
            searchKey={searchKey}
            setSearchKey={setSearchKey}//
            onSubmitSearch={onSubmitSearch}
            ></SearchBar>
            <Posts posts={otherPosts.posts} postState={otherPosts}></Posts>
        </div>
    );
};
export default Search;