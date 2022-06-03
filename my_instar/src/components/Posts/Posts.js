import { useState } from "react";
import { List, Spinner } from "reactstrap";
import "./Posts.css";
import PostDetail from "./PostDetail";
import { deletePost, selectMyPost, selectOtherPost } from "../../store/posts";
import { useLocation } from "react-router";
import { useDispatch } from 'react-redux';
import { selectUserById } from "../../store/users";
import { postPost } from "../../store/PostsAPI";

const Posts=({postState, posts}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [clickPost, setClickPost] = useState();
    const [postUser, setPostUser] =useState();
    const dispatch=useDispatch();
    const location = useLocation();
    const openModal=(post)=>{
        // setClickPost(post);
        // setIsOpen(true);
        dispatch(selectUserById(post.userId))
            .unwrap()
            .then((result)=>{
                setPostUser(result);
            })
            .finally(()=>{
                setClickPost(post);
                setIsOpen(true);
            });
    };
    const closeModal=()=>{
        setClickPost();
        setIsOpen(false);
    };
    const onClickDelete = (postId)=>{
        dispatch(deletePost(postId));
        // closeModal();
        dispatch(location.pathname==="/profile"?selectMyPost():selectOtherPost());
        setIsOpen(false);
    };
    return (
        <div className="Posts">
            {postState.loading ?(
                <Spinner>Loading...</Spinner>
            ):(
            posts?.map((post) => (
                <div className="PostsImgBox" onClick={()=> openModal(post)} key={post.id}>
                    <img className="PostsImg" key={post.id} src={post.img} alt={post.content}></img>
                </div>
            ))
            )}
            {clickPost? (
            <PostDetail 
            isOpen={isOpen} //
            clickPost={clickPost}
            closeModal={closeModal}
            onClickDelete={onClickDelete}
            user={postUser}>
            </PostDetail>):null} 
        </div>
    );
};


export default Posts;

