import React ,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber , decNumber ,multNumber , divNumber} from './actions';
import UseEffect2 from './UseEffect2';
const App =()=>{
  const [count,setcount]=useState(0)
  useEffect(()=>{
    if (count >=1){
      document.title=`Chats(${count})`
    }else{
      document.title=`Chats`
    }
  },[count])
  // when you want t useEffect only when app is reload then []
  // when count state changed , UseEffect get Call because of [count]
  const mystate=useSelector((state)=> state.changeTheNumber)
  const myotherstate=useSelector((state)=> state.multTheNumber)
  const dispatch=useDispatch()
  return (
    <>
    <div>
      <h1>Welcome To Redux</h1>
      <h1>Increment and Decrement Using React Redux  </h1>
       <div>
         <a title='Decrement' onClick={() => dispatch(decNumber())}><span>-</span></a>
         <input name='quantity' value={mystate}/>
         <a title="Increment" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
       </div>
       </div>

       <div style={{marginTop:"50px"}}>
      <h1>Welcome To Redux</h1>
      <h1>Multiplication / Division Using React Redux  </h1>
       <div>
         <a title='Decrement' onClick={() => dispatch(divNumber(5))}><span>/</span></a>
         <input name='quantity' value={myotherstate}/>
         <a title="Increment" onClick={() => dispatch(multNumber(5))}><span>*</span></a>
       </div>
       </div>
       <div style={{marginTop:"50px"}}> 
       <input type="number" value={count}/>
         <h1>
           Count 😒😒
         </h1>
         <button onClick={()=> setcount(count+1)}>Click</button>
       </div>
       <div>
         <UseEffect2/>
       </div>
    </>
  )
}

export default App;
