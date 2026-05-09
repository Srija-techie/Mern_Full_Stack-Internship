import React, { useMemo, useState } from 'react'
import Factorial from './Factorial';

const Factorial = () => {
    const [num,setNumber]=useState(1);
    const [count,setCount]=useState(1);
    const [result,setResult]=useState(1);
    const factorial=()=>{
        let fact=1;
        for(let i=1;i<=num;i++){
            fact*=i;
        }
        setResult(fact);
    };
    // let result=factorial();
    useMemo(()=>{
        factorial();    
    },[num]);
    
    

  return (
    <div className='h-60 m-5'>
        <h1 className='text-center text-3xl font-bold'>Factorial</h1>
        <input type='number' onChange={(e)=>{
            setNumber(Number(e.target.value));
        }}
        placeholder='Enter a value to find factorial'/>{""}
        <div>Factorial:{result}</div>
        <button className='bg-sky-300 p-5 rounded-2xl  text-center text-3xl font-bold mx-3' onClick={()=>{setCount(count+1)}}>Increment Count</button>
        <button className='bg-sky-300 p-5 rounded-2xl text-3xl text-center font-bold mx-3' onClick={()=>{setNumber(num+1)}}>Increment Count</button>
    </div>
  )
}

export default Factorial;