import React,{ useState } from 'react'
import InputBuilder from '../builder/InputBuilder';
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';



const Register = () => {

    const [formData,setFormData]=useState({
      name:"",
      email:"",
      password:"",
      profile:"",
      confirmPassword:""
    })
     
    
    const [showPass,setShowpass]=useState(false)
    const handleChange=(e)=>{
      let {name,value}=e.target
      setFormData((preval)=>({...preval,[name]:value}))
  
    }

  const handleShowPass=()=>{
    setShowpass(!showPass)
  }
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(formData);
      
      
    }
    let {email,password,name,confirmPassword,}=formData

  return (
   <div className='h-screen w-screen flex justify-center items-center max-sm:p-10'>
    
      <div className='w-2/4 rounded-2xl shadow-2xl overflow-hidden relative group'>
        <img src="https://www.wpdownloadmanager.com/wp-content/uploads/2021/06/101-Most-Popular-Live-Chat-Scripts-and-Customer-Service-Phrases-to-Use-1024x588.png" alt="" className='size-full object-cover rounded-xl' />
        <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
        <div className="absolute inset-0 bg-[#f4caca]/40"></div>
        <form action="" onSubmit={handleSubmit}
        className='absolute left-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 w-64'>
          <div className='flex justify-center'>
            <h1 className='text-2xl font-bold'>Registration</h1>
          </div>
          <InputBuilder type='name' name="name" val={name} handleChange={handleChange}>
          <MdOutlineDriveFileRenameOutline className='text-2xl' />
         </InputBuilder>
          <InputBuilder type='email' name="email" val={email} handleChange={handleChange}>
          <MdOutlineMail className='text-2xl'/>
          </InputBuilder>
          <InputBuilder type={`${showPass?"text":"password"}`} name="password" val={password} handleChange={handleChange} handleClick={handleShowPass}>
          {
            !showPass?<FaRegEye className='text-2xl'/>:<FaRegEyeSlash className='text-2xl'/>
          }
          </InputBuilder>
           <InputBuilder type={`${showPass?"text":"confirmPassword"}`} name="confirmPassword" val={confirmPassword} handleChange={handleChange} handleClick={handleShowPass}>
          {
            !showPass?<FaRegEye className='text-2xl'/>:<FaRegEyeSlash className='text-2xl'/>
          }
          </InputBuilder>
          
          <div className='w-full h-10 bg-black text-white rounded-lg duration-75 active:bg-red-500 active:scale-95'>
          <button className='size-full flex justify-center items-center gap-6'>Register</button>
          </div>
          <div className='w-full flex justify-center gap-1'>Already have an Account?<Link to="/" className='hover:underline'>Login</Link></div>
         </form>

     <div className="absolute right-0 h-full w-1/2 flex items-center justify-end">

          <div className="absolute right-0 size-full bg-[#f2d5d5] rounded-l-full"></div>

          <div className="absolute right-10 w-3/4 h-4/5 bg-[#ecb4b4a1] rounded-l-full"></div>

          <div className="absolute right-20 w-2/4 h-3/5 bg-[#d9a6a6] rounded-l-full"></div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0qB4NoKmCmmHzi_bLGojoZ3Qgo1RDVh0Wg&s"
          alt="profile"
          className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover" />
      </div>

          </div>
  
      </div> 
        </div>
      </div>
    // </div>
  // </div>

 )
}
export default Register


// import React, { useState } from "react";
// import InputBuilder from "../builder/InputBuilder";
// import { MdOutlineMail } from "react-icons/md";
// import { Link } from "react-router-dom";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

// const Register = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [showPass, setShowPass] = useState(false);

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleShowPass = () => {
//     setShowPass(!showPass);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   let { email, password, name, confirmPassword } = formData;

//   return (

//     <div className="h-screen w-screen flex justify-center items-center bg-gray-100">

//       {/* Main container */}
//       <div className="relative w-[950px] h-[520px] bg-[#f3dada] rounded-2xl overflow-hidden shadow-2xl flex">

//         {/* Background Illustration */}
//         <img
//           src="/bg.png"
//           alt=""
//           className="absolute w-full h-full object-cover opacity-30"
//         />

//         {/* LEFT SIDE FORM */}
//         <div className="w-1/2 z-10 flex justify-center items-center">

//           <div className="w-[320px]">

//             <h1 className="text-3xl font-bold mb-6">Registration</h1>

//             <form
//               className="flex flex-col gap-4"
//               onSubmit={handleSubmit}
//             >

//               <InputBuilder
//                 type="text"
//                 name="name"
//                 val={name}
//                 handleChange={handleChange}
//               >
//                 <MdOutlineMail />
//               </InputBuilder>

//               <InputBuilder
//                 type="email"
//                 name="email"
//                 val={email}
//                 handleChange={handleChange}
//               >
//                 <MdOutlineMail />
//               </InputBuilder>

//               <InputBuilder
//                 type={`${showPass ? "text" : "password"}`}
//                 name="password"
//                 val={password}
//                 handleChange={handleChange}
//                 handleClick={handleShowPass}
//               >
//                 {!showPass ? <FaRegEye /> : <FaRegEyeSlash />}
//               </InputBuilder>

//               <InputBuilder
//                 type={`${showPass ? "text" : "password"}`}
//                 name="confirmPassword"
//                 val={confirmPassword}
//                 handleChange={handleChange}
//                 handleClick={handleShowPass}
//               >
//                 {!showPass ? <FaRegEye /> : <FaRegEyeSlash />}
//               </InputBuilder>

//               <button className="w-full h-10 bg-black text-white rounded-lg hover:bg-red-500">
//                 Register
//               </button>

//               <div className="text-center">
//                 Already have an Account?
//                 <Link to="/" className="text-blue-600 ml-1">
//                   Login
//                 </Link>
//               </div>

//             </form>

//           </div>

//         </div>


//         {/* RIGHT SIDE DESIGN */}
//         <div className="w-1/2 relative flex items-center justify-center">

//           {/* Ellipse 1 */}
//           <div className="absolute right-0 w-[420px] h-[420px] bg-[#e9bcbc] rounded-l-full"></div>

//           {/* Ellipse 2 */}
//           <div className="absolute right-10 w-[360px] h-[360px] bg-[#dca4a4] rounded-l-full"></div>

//           {/* Ellipse 3 */}
//           <div className="absolute right-20 w-[300px] h-[300px] bg-[#cf8f8f] rounded-l-full"></div>


//           {/* PROFILE IMAGE */}
//           <div className="relative z-10">

//             <img
//               src="/profile.jpg"
//               alt="profile"
//               className="w-[150px] h-[150px] rounded-full object-cover border-4 border-white shadow-xl"
//             />

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// };

// export default Register;
