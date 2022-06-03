import {useState} from "react";

const MemoContainer = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);
    // const [primaryNumber, setPrimaryNumber] = useState();
    const onChangeHandler = (e) => {
        const eventNumber = Number(e.target.value);
        setNumber(eventNumber);
        // setPrimaryNumber(getPrimaryNumber(eventNumber));
    };
   /*   const getPrimaryNumber =(number)=> {
        //소수 구하는 로직
        
    };  */
    return (

        <div>
            <p>{count}</p>
            <button onClick={ () => {
                setCount(count+1);
            }}
            >
                +
            </button>
            <hr></hr>
            <input type={"number"} value={number} onChange={onChangeHandler}></input>
            {/* <p>{`소수가 ${primaryNumber}개 있습니다.`}</p> */}
            <primaryNumber number={number}></primaryNumber>
        </div>
    );
};

export default MemoContainer;