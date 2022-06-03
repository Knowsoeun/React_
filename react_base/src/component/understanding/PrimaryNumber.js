import {useEffect, useState } from "react";

const PrimaryNumber = ({number})=> {
    const [primaryNumber, setPrimaryNumber] = useState();
    useEffect(() => {
        console.log("effect");
        getPrimaryNumber();
    }, [number]);
    const getPrimaryNumber=()=>{
        let primaryNumber=0;
        for(let i=2; i<=number; i++){
            let isPrimary = true;
            for (let j=2; j<i; j++){
                if (i%j ===0){
                    isPrimary = false;
                    break;
                }
            }
            if (isPrimary) primaryNumber++;
        }
        setPrimaryNumber(primaryNumber);
    };
    return <p>{`소수가 ${primaryNumber}개 있습니다.`}</p>
    };
    export default PrimaryNumber;
    /* const [getPrimaryNumber, setPrimaryNumber] = ()=> {
        let primaryNumber=0;
        for (let i=2; i<=number; i++){
            let isPrimary = true;
            for(let j = 2; j<i; j++){
                if (i%j ===0){
                    isPrimary = false;
                    break;
                }
            }
            if (isPrimary) primaryNumber++;
        }
        return primaryNumber; */
