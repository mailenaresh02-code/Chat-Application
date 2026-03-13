import React,{ useState,useEffect } from 'react'
import InputBuilder from '../builder/InputBuilder';
import { MdOutlineMail } from "react-icons/md";
import { Link,useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';



const Login = () => {

    const [formData,setFormData]=useState({
      email:"",
      password:""
    })
      
    const [showPass,setShowpass]=useState(false)

    const handleChange=(e)=>{
      let {name,value}=e.target
      setFormData((preval)=>({...preval,[name]:value}))
  
    }
    const navigate=useNavigate()

    const [slide,setSlide] = useState(false)

      useEffect(()=>{
        setSlide(true)
      },[])
      

  const handleShowPass=()=>{
    setShowpass(!showPass)
  }

    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formData);  
    }

    let {email,password}=formData

  return (
   <div className='h-screen w-screen flex justify-center items-center max-sm:p-10'>
      <div className='w-2/4 h-112 rounded-2xl shadow-2xl overflow-hidden relative'>
        <img src="https://www.wpdownloadmanager.com/wp-content/uploads/2021/06/101-Most-Popular-Live-Chat-Scripts-and-Customer-Service-Phrases-to-Use-1024x588.png" alt="" className='size-full object-cover rounded-xl' />
        <div className={`absolute inset-0 flex justify-center transition-transform duration-700 ease-in-out ${slide ? "translate-x-0" : "translate-x-full"}`}>
        <div className="absolute backdrop-blur-md rounded-2xl shadow-xl"></div>
        <form action="" onSubmit={handleSubmit}
        className="relative z-30 flex flex-col top-10 gap-3 w-1/2 p-10 h-100 rounded-xl bg-[#f4caca]/40 justify-center items-center">
          <div className='flex justify-center'>
            <h1 className='text-2xl font-bold'>Login</h1>
          </div>
          
          <InputBuilder type='email' name="email" val={email} handleChange={handleChange}>
          <MdOutlineMail className='text-2xl'/>
          </InputBuilder>
          <InputBuilder type={`${showPass?"text":"password"}`} name="password" val={password} handleChange={handleChange} handleClick={handleShowPass}>
          {
            !showPass?<FaRegEye className='text-2xl'/>:<FaRegEyeSlash className='text-2xl'/>
          }
            </InputBuilder>
          
          <div className='w-full h-10 bg-black text-white rounded-lg duration-75 active:bg-red-500 active:scale-95'>
          <button className='size-full flex justify-center items-center gap-6'>Login</button>
          </div>
          <div className='w-full flex justify-center gap-1'> don't have an Account?
            <Link to="/register" className='hover:underline'>Register</Link>
            {/* <button type="button" onClick={()=>navigate("/register")} className="hover:underline">Register</button> */}
            </div>
         </form>  
        </div>
      </div>
    </div>
 )
}
export default Login

