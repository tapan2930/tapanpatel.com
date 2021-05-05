import React from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useRouter } from "next/router"
import { useState } from "react";
import firebaseClient from "../src/services/firebaseClient.service"
import firebase from "firebase"
import "firebase/auth"
import { useEffect } from "react";


const Admin: React.FC = (): React.ReactElement => {
   
  const router = useRouter()  
  const [formData, setFormData] = useState({
      email:"",
      password: "",
      error:"",
      isloading:false
  })

  useEffect(()=>{
    firebaseClient()
  }, [])

  const onSubmitHandler = async (e:any)=>{
      e.preventDefault()
      setFormData({...formData, isloading:true, error:""})
      console.log("inside fn")
      await firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
      .then(()=>{
        setFormData({...formData, isloading:false})
        router.push("/admin/projects")
      })
      .catch((error)=>{
          console.log(error)
          setFormData({...formData, error: error.message, isloading:false})
      })
  }

  return (
    <div className="h-screen overflow-y-hidden bg-gray-900 text-gray-200">
      <div onClick={()=>{ router.push("/")}} className="inline-flex fixed top-0   cursor-pointer items-center font-semibold text-sm p-2">
        <span className="mr-2 text-lg ">
          <HiArrowNarrowLeft />
        </span>
        <span>Back To Home</span>
      </div>
      <div className="flex justify-center sm:items-center h-full">
        <div
          style={{ maxWidth: "486px", width: "486px" }}
          className="px-3 py-12 md:px-12 flex flex-col md:border md:rounded-lg border-gray-700"
        >
          <div className="w-full text-center my-6">
            <span className="block mb-2 ">Login to continue with</span>
            <span className=" font-semibold text-teal-500 tracking-wide border-b-4 border-teal-500">
              Admin
            </span>
          </div>
          <div className="mt-6">
            <form>
                <div className="p-3  flex bg-gray-800 rounded-md mb-4">
                    <label className="text-gray-400">Email:</label>
                    <input className="flex-grow ml-2 bg-gray-800 outline-none" type="text"  onChange={e => setFormData({...formData, email: e.target.value})} required />
                </div>
               <div className="p-3  flex bg-gray-800 rounded-md mb-6">
                    <label className="text-gray-400">Password:</label>
                    <input className="flex-grow ml-2 bg-gray-800 outline-none" type="password"  onChange={e => setFormData({...formData, password: e.target.value})} required />
               </div>
               <div className=" flex shadow-sm ">
                    <button 
                    type="submit" 
                    onClick={onSubmitHandler} 
                    className={` ${formData.isloading? "animate-pulse" : ""} relative flex-grow bg-gray-900 p-3 rounded-md text-teal-500 outline-none cursor-pointer border border-gray-800 hover:border-teal-500 transition-all `}>
                        Login
                        <span className={`  ${formData.isloading? " animate-ping inline" : "hidden"} absolute bg-teal-500 w-4 h-4 rounded-full -right-1 -top-1`}></span>
                    </button>
               </div>
            </form>
            <div className="text-red-400 text-xs mt-3">{formData.error}</div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Admin