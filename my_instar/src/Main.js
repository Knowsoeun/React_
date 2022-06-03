import { useEffect } from "react";
import { Card, Container, Spinner } from "reactstrap";
import { selectMyFollower } from "./store/follows";

const Main=()=>{
    const mainPosts=useSelector((state)=> state.posts.mainPosts);
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
                <img 
                    className="PostsBodyImg"
                    src={post?.img} //
                    alt="postimg"
                    ></img>
                    <p>{post?.content}</p>
            </div>
        </Card>
    );
};

export const getPostMain =async(posts, follows, users) => {
    try{
        const filterPostMain=await posts.filter(
            (
                {userId} //
            )
        )
    }
}