// import React, { useEffect, useState } from 'react'
// import './style.css'
// import { io } from 'socket.io-client'

// const socket = io("http://localhost:3000/")

// const App = () => {
//     const [mes,setMsg]=useState({
//         userName:"",
//         msg:""
//     })
//     const [allMsg,setAllMsg]=useState([])
//     const [typing,setTyping]=useState(false)
//     const [userTyping,setUserTyping]=useState(false)

//     useEffect(()=>{
//         let userName=prompt("Enter Your Name")
//         setMsg((preval)=>({...preval,userName:userName}))
//     },[])

    
//     useEffect(()=>{
//         socket.on("connect",()=>{
//             console.log("connected");
//         })
       
//         socket.on('chat message',(data)=>{
//             console.log(data);
            
//             setAllMsg([...allMsg,data])
            
//         })
//     },[allMsg])


//     useEffect(()=>{
//         socket.emit("typing",typing)
//             socket.on("typing",(type)=>{
//                 setUserTyping(type)
//             })
//     },[typing])


//     const handleChange=(e)=>{
         
//         setMsg((preval) => ({
//             ...preval,[e.target.name]: e.target.value
//         }))
//         setTyping(true)

//         setTimeout(()=>{
//             setTyping(false)
//         },1000)
//     }   

    
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         //console.log(mes);
//         socket.emit('chat message',mes)
//         setMsg((preval)=>({...preval,msg:""}))
//     }
    
//   return (
//     <div className='h-screen w-screen flex flex-col'>
//         <div className='w-full h-[calc(100%-80px)]'>
//             {
//                 allMsg.length? <div>
//                     {
            
//                     allMsg.map((ele,ind)=><div key={ind} className={`w-full h-10 flex items-center ${!(ele.userName==mes.userName)?"justify-start":"justify-end"}`}>
//                         <span className={`p-2 rounded-lg ${ele.userName!=mes.userName?"bg-gray-400":"bg-green-500"}`}>
//                             {
//                                 ele.msg
//                             }
//                         </span>
//                     </div>)
//                 }
//                 </div>:""
//             }

//             {
//                 userTyping && allMsg[0]?.userName!=mes.userName &&<div> typing....</div>
//             }
//         </div>
//         <div className='w-full h-20'>
//             <form className='size-full p-5 flex justify-center items-center gap-3' onSubmit={handleSubmit}>
//                 <div></div>
//                 <div className='h-20 w-full flex overflow-y-hidden gap-5 p-3'>
//                     <input type="text" className='h-full w-9/10 px-10 border-2 rounded-lg' name='msg' onChange={handleChange} value={mes.msg}/>
//                     <button className='h-full w-1/10 rounded-lg border-2 bg-gray-400 active:bg-gray-800 text-white font-bold'>Click</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import "./styles/style.css"

const App = () => {
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App