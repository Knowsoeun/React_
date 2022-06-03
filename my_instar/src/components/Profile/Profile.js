import { Container } from "reactstrap";
import { UserContext } from "../../store/UserContext";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";
import { useContext } from "react";
import { PostContext } from "../../store/PostContext";
import { FollowContext } from "../../store/FollowContext";
import ProfileBoard from "../Posts/Posts";
import Posts from "../Posts/Posts";
import {useSelector} from "react-redux";
import { useEffect } from "react";
import { selectMyPost } from "../../store/posts";
import { useDispatch } from 'react-redux';
import { selectMyFollower, selectMyFollowing } from "../../store/follows";

const Profile = () => {
    /* const {users} = useContext(UserContext);

    const id=Number(localStorage.getItem("id"));
    const getUser= () => {
        return users.find((user) => id === user.id);
    };
    const {name, img} = getUser();
    const {posts, deletePost} = useContext(PostContext);
    const {follows} = useContext(FollowContext); */
    const {name, img, id} = useSelector((state)=>state.users.me);
    // console.log(img);
    /* const {posts, deletePost}=useContext(PostContext);
    const {follows} =useContext(FollowContext); */
    // const myPosts = () => {
    //     /* console.log(posts.filter((post)=> post.userId===id), posts); */
    //     return posts.filter((post)=> post.userId===id);
    // };
    const myPosts =useSelector((state)=> state.posts.myPosts);
   /*  const {follows}=useContext(FollowContext); */
   const follower=useSelector((state)=>state.follows.myFollower);
   const following=useSelector((state)=>state.follows.myFollowig);
    const dispatch=useDispatch();
    const getMyPost=()=>{
        dispatch(selectMyPost());
    };
    useEffect(()=>{
        getMyPost();
        myFollower();
        myFollowing();
    }, []);
    const myFollower=()=>{
        // return follows.filter((follow) => follow.following ===id);
        dispatch(selectMyFollower());
    };
    const myFollowing=()=>{
        // return follows.filter((follow)=> follow.follower===id);
        dispatch(selectMyFollowing());
    };

    return (
        <>
            <ProfileHeader name={name}></ProfileHeader>
            <Container className="ProfileContainer">
                <ProfileBody 
                img={img} //
                follower={follower} 
                following={following} 
                posts={myPosts}
                name={name}
                ></ProfileBody>
                <Posts posts={myPosts.posts} name={name} img={img} postState={myPosts}></Posts>
            </Container>
        </>
    );
};

export default Profile;