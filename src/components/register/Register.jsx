import React,{ useState,useRef,useEffect } from 'react'
import InputBuilder from '../builder/InputBuilder';
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Link,useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";


const Register = () => {

    const [formData,setFormData]=useState({
      name:"",
      email:"",
      password:"",
      profile:"",
      confirmPassword:""
    })
     
    const [profilePic,setProfilePic]=useState(null)
    const [croppedImage, setCroppedImage] = useState(null)
    const [showCropper,setShowCropper] = useState(false)
    const navigate = useNavigate()

    const [showPass,setShowpass]=useState(false)

    const handleChange=(e)=>{
      let {name,value}=e.target
      setFormData((preval)=>({...preval,[name]:value}))
    }
    const [slide,setSlide] = useState(false)
      useEffect(()=>{
        setSlide(true)
          },[])
  
  const cropperRef = useRef(null)
  
  const onCrop = () => {
  const cropper = cropperRef.current?.cropper;
  if (cropper) {
    const cropped = cropper.getCroppedCanvas({
      width:200,
      height:200
    }).toDataURL();
    setCroppedImage(cropped);
    setShowCropper(false)

    setFormData((prev)=>({...prev,profile:cropped}))
  }
}


  const handleShowPass=()=>{
    setShowpass(!showPass)
  }

  const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setProfilePic(imageUrl);
    // setFormData((prev)=>({...prev,profile:file}))
    setShowCropper(true)
  }
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
           <div className={`absolute inset-0 flex items-center justify-end transition-transform duration-700 ${slide ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="absolute inset-0 bg-[#f4caca]/40"></div>
              <form action="" onSubmit={handleSubmit} className={`absolute left-10 top-10 z-30 flex flex-col gap-3 w-64 transition-all duration-700 ease-in-out ${slide ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
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
                <div className='w-full flex justify-center gap-1'>Already have an Account?
                  <Link to="/" className='hover:underline'>Login</Link>
                  {/* <button type="button" onClick={()=>navigate("/")}className="hover:underline">Login</button> */}
                </div>
              </form>

        <div className={`absolute right-0 h-full w-1/2 flex items-center justify-end transition-transform duration-700 ${slide ? "translate-x-0" : "translate-x-full"}`}>
          <div className={`absolute right-0 size-full bg-[#f2d5d5] rounded-l-full transition-all duration-700 ${slide ? "translate-x-0" : "translate-x-40"}`}></div>
          <div className={`absolute right-10 w-3/4 h-4/5 bg-[#ecb4b4a1] rounded-l-full transition-all duration-700 delay-200 ${slide ? "translate-x-0" : "translate-x-40"}`}></div>
          <div className={`absolute right-20 w-2/4 h-3/5 bg-[#d9a6a6] rounded-l-full transition-all duration-700 delay-400 ${slide ? "translate-x-0" : "translate-x-40"}`}></div>

          {/* <div className="absolute right-0 size-full bg-[#f2d5d5] rounded-l-full"></div>
          <div className="absolute right-10 w-3/4 h-4/5 bg-[#ecb4b4a1] rounded-l-full"></div>
          <div className="absolute right-20 w-2/4 h-3/5 bg-[#d9a6a6] rounded-l-full"></div> */}

          <div className="absolute left-0 top-1/2 -translate-y-1/2">
              {!showCropper && (
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-200 flex items-center justify-center">
                {croppedImage ? (
                <img src={croppedImage} className="w-50 h-50 object-cover" />) : ( <span className="text-sm">Profile</span>
                )}
              </div>
            )}
                <input type="file" accept="image/*" onChange={handleImageChange} className="text-sm"/>
                  {showCropper && (
                    <>
                      <Cropper src={profilePic} className='h-50 w-50' aspectRatio={1} viewMode={1} guides={false} ref={cropperRef} autoCropArea={0.5} cropBoxResizable={true} cropBoxMovable={true} dragMode="move" background={false} responsive={true} checkOrientation={false}/>
                        <button type="button" onClick={onCrop} className="bg-black text-white px-4 py-1 rounded-lg" >Submit</button>
                    </>
                  )}
            </div>                
          </div>
        </div> 
      </div>
    </div>
 )
}
export default Register
