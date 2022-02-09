import React,{useState,useEffect} from 'react'

const UseEffect2 = () => {
    const [width,setwidth]=useState(window.screen.width)
    const actualWidt = ()=>{
        console.log(window.innerWidth)
        setwidth(window.innerWidth)
    }
    useEffect(()=>{
        console.log("event added")
        window.addEventListener("resize",actualWidt)
        //CLean Up Function used to clean unneeded memory
        return ()=>{
            console.log("revome Event")
            window.removeEventListener("resize",actualWidt)
        }
    })
    return (
        <div>
            <h1>Size of the window </h1>
            <h2>{width}</h2>
        </div>
    )
}

export default UseEffect2