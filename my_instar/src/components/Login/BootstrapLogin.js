import "./BootstrapLogin.css";

import { Button, Col, Container, Form, Row, Alert, Input } from "reactstrap";
import { Users } from "./User";
import {useState} from 'react';
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../store/UserContext";
import {useDispatch, useSelector} from "react-redux";
import AuthRouter from "../AuthRouter";
import "./Login.css";
import { login } from "../../store/users";


const BootstrapLogin = () => {
    const {isLogin} =useSelector((state)=> state.users);
    const dispatch = useDispatch();
    const [isFail, setIsFail] = useState(false);
    const [user, setUser] = useState({
        id: "",
        password: "",
    });
    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setUser ({...user, [name]:value});
    };
    const navigate = useNavigate();
    /* const {users }= useContext(UserContext); */
    const onSubmitLogin = async (e) => {
        e.preventDefault();
        /* dispatch(login({user})); */
        const {isLogin} =await dispatch(login(user)).unwrap();
        /* console.log("안녕1"); */
        /* const findUser = Users.find((data) => data.userId === user.id && data.password === user.password); */
        /* console.log(Users);
        console.log(findUser); */
        /* if (!findUser || !id){
            navigate("/login");
        } */
        if (isLogin){
            //로그인 후 로직
            /* localStorage.setItem("id", findUser.id); */
            /* console.log("안녕2"); */
            navigate("/");
        }else{
            // console.log("fail");
            // 없는 유저 처리
            setIsFail(true);
            setTimeout(() => closeAlert(), 3000);
        }
    };
    const closeAlert =() => {
        setIsFail(false);
    };
    
    return (
        <div className="LoginPage">
            <Container className="bg-light border">
                <Row sytle={{ rowGap: "1em", padding: "3em"}}>
                    <Col xl={12}>
                        <img src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="Logo"></img>
                    </Col>

                    <Col xl={12}>
                        <Form onSubmit={onSubmitLogin} className="LoginForm">
                            {isFail ? (
                                <Alert color="warning" toggle={() => closeAlert}>
                                    아이디 또는 비밀번호가 틀렸습니다.
                                </Alert>
                            ) : null}
                            <Input type="text" placeholder="ID" name="id" onChange={(e) => onChangeHandler(e)}></Input>
                            <Input type="password" placeholder="password" name="password" onChange={(e) => onChangeHandler(e)}></Input>
                            <Button type={"submit"} color="primary" block>
                                로그인
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container className="bg-light border">
                <Row style={{padding: "1em", textAlign: "center"}}>
                    <p>
                        계정이 없으신가요? <a href="g">가입하기</a>
                    </p>
                </Row>
            </Container>
        </div>
    )
};

export default BootstrapLogin;