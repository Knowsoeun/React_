import {useState} from 'react';
import Second from "./Second";

const First= () => {
    const [name, setName] = useState("hello");
    return (
        <>          {/* <div>대신 <>이걸로도 return 내용을 묶을 수 있다. */}
            <p>{`first: ${name}`}</p>
            <button onClick={() => {
                setName("world");
            }}
            >
                first name set world
            </button>
            <Second name={name}></Second>
        </>
    )
};
export default First;