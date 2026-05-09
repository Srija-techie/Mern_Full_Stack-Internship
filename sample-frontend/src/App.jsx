import React, { useMemo, useState } from 'react'

const App = () => {

  const[count,setCount]=useState(0);
  const handleIncrement=()=>{
    setCount(count+1)
  }



  // let fact=1;
  // const factorial=()=>{
  // for(i=1;i<=num;i++){
  //   fact=fact*1;
  // }
  // return fact;
  // };


  const fact=()=>{
    console.log("Sample Function");
    return "hello";
  }

  return (
    <div className="bg-[url('https://img.magnific.com/free-photo/blurred-pop-abstract-background-pink_58702-1699.jpg?semt=ais_hybrid&w=740&q=80')] h-200 bg-no-repeat bg-cover bg-center w-100% p-5 flex flex-col justify-center items-center">
      <h1 className="text-center font-bold bg-red-400 m-1 p-5 w-100 italic text-2xl rounded-4xl shadow-2xl shadow-rose-500 text-amber-100 underline decoration-amber-100 decoration-10px">Sample Project</h1>

      <h2 className="backdrop-blur-2xl w-50 text-center text-2xl font-bold shadow-2xl shadow-rose-900 rounded-4xl text-amber-100 m-10" >Welcome to Tailwind
      </h2>

      {/* <button onClick={handleIncrement} className='bg-amber-200 hover:bg-amber-300 hover:cursor-pointer rounded-2xl w-30'>Increment++</button>
      <button className='text-4xl font-bold'>{count}</button>
      <button onClick={fact}>{fact}</button>
 */}

      <div className='bg-rose-800 h-50  p-10 grid grid-cols-4 gap-1.5 gap-x-2 gap-y-2 rounded-2xl'>
        <div className="bg-rose-300 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-400 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-500 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-500 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-200 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-300 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-300 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-300 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-500 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-700 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-200 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
        <div className="bg-rose-500 h-10 w-30  rounded-2xl shadow-2xs shadow-rose-400"></div>
      </div>
    </div>
  )
}

export default App