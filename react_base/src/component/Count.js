import React, {useState} from "react";

const Count = () => {
    const [number, setNumber] = useState(1);
    const [inputNumber, setInputNumber] = useState(1);
    const [isCheck, setIsCheck] = useState(false);
    const selectList= [
        { name:1, value:1},
        {name:2, value:2},
        {name:3, value:3},
        {name:4, value:4}
    ];

    const onChangeHandler = (e) => {
        const {value} = e.target;
        setInputNumber(Number(value));
    };
    const onClickPlus = () => {
        setInputNumber(number + inputNumber);
    };
    const onClickMinus = () => {
        setNumber(Number-inputNumber);
    };
    const onChangeCheckBox = () =>{
        setIsCheck(!isCheck);
    };

    return(
        <div>
            <p>{`숫자: ${number}입니다.`}</p>
            <p>
                값 받아 변경하기<input type="checkbox" checked={isCheck} onChange={onChangeCheckBox}></input>
            </p>
            {isCheck? <input type="number" value={inputNumber} onChange={onChangeHandler}></input> : null}
            <select onChange={onChangeHandler} value={inputNumber}>
                {selectList.map((element, i) => {
                    <option value={element.value} key={i}>
                        {element.name}</option>
                })}
            </select>
            <input type = "number" value={inputNumber} onChange={onChangeHandler}></input>
            <button onClick={onClickPlus}></button>
            <button onClick={onClickMinus}></button>
        </div>

    );
};
export default Count;