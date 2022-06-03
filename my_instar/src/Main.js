import { useEffect } from "react";
import { Card, Container, Spinner } from "reactstrap";
import { selectMyFollower } from "./store/follows";
import "./Main.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectPostMain } from "./store/posts";
import PostsAdd from "./components/Posts/PostsAdd";

const Main=()=>{
    const mainPosts=useSelector((state)=> state.posts.mainPosts);
    console.log(mainPosts);
    const dispatch =useDispatch();
    const followOtherPost=async()=>{
        await dispatch(selectMyFollower());
        await dispatch(selectPostMain());
    };
    useEffect(()=>{
        followOtherPost();
    }, []);
    return (
        <div>
            <MainHeader></MainHeader>
            <Container>
                {mainPosts.loading ? ( //
                    <Spinner>loading...</Spinner>
                ): (
                    mainPosts.posts.map((post)=><MainCard key={post.id} post={post}></MainCard>)
                )}
            </Container>
        </div>
    );
};
export default Main;

const MainHeader=()=>{
    return (
        <div className="mainHeader">
            <div className="mainImgBox">
                <img className="mainLogo" src=""></img>
            </div>
            <PostsAdd></PostsAdd>
        </div>
    );
};

const MainCard =({post })=>{
    return (
        <Card className="mainCard">
            <div className="PostsBodyHeader">
                <div className="PostsBodyHeaderImgBox">
                    <img 
                        className="PostsBodyHeaderImg" //
                        src={post.userImg}
                        alt="userImg"
                        ></img>
                </div>
                {post.userName}
                </div>
                <img 
                    className="PostsBodyImg"
                    src={post?.img} //
                    alt="postimg"
                    ></img>
                    <p>{post?.content}</p>
            
        </Card>
    );
};

