
import {useEffect, useState} from "react";

const CountEffect = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState(0);
    useEffect(() => {
        console.log("없음", count);
    });
    useEffect(() => {
        console.log("[]", count);
    }, []);
    useEffect(() => {
        console.log("[count]", count);
    }, [count]);
    useEffect(() => {
        console.log("[name]", name);
    }, [name]);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>버튼</button>
            <input value={name} onChange={e => setName(e.target.value)}></input>
            <ht></ht>
        </div>
    );
};

export default CountEffect;