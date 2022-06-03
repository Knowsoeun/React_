import { useContext } from "react";
import { Modal } from "reactstrap";
import { Button, Container } from "reactstrap";
import { UserContext } from "../../store/UserContext";
import { Users } from "../Login/User";
import { useSelector } from 'react-redux';

const PostDetail = ({isOpen, clickPost, closeModal, onClickDelete, user})=>{
    // const {users}=useContext((UserContext));
    //console.log(clickPost);
    // const getUser=()=> {
    //     return users.find((user) =>user.id===clickPost.userId);
    // };
    // const user=getUser();
    // const myId=Number(localStorage.getItem("id"));
    const myId=useSelector((state)=>state.users.myId);
    return (
        <Modal isOpen ={isOpen} fullscreen toggle={closeModal}>
            <div className="profileBoardModalHeader">
                    <Button close onClick ={closeModal}></Button>{" "}
                <div>
                    {user.name}
                    <strong>게시물</strong>
                </div>
                {user.id===myId ?(
                    <Button color="danger" outline onClick={() => onClickDelete(clickPost.id)}>
                        삭제하기
                    </Button>
                ) : (
                    <div></div>
                )}
           </div>
            <Container>
                <div className="PostsBody">
                    <div className="PostsBodyHeader">
                        <div className="PostsBodyHeaderImgBox">
                            <img className="PostsdBodyHeaderImg" src={user.img} alt="userImg"></img>
                        </div>
                        {user.name}
                    </div>
                    <img className="PostsBodyImg" src={clickPost?.img} alt="postimg"></img>
                    <p>{clickPost?.content}</p>
                </div>
            </Container>
        </Modal>
    );
};

export default PostDetail;