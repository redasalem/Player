import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/config/firebase";
import { useSession } from "next-auth/react";
import { query, where} from "firebase/firestore";
import { useRouter } from "next/router";
import PostDetails from "../components/PostDetails";
import { IoCloseSharp } from "react-icons/io5";
import { doc, deleteDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const router = useRouter()
  const db = getFirestore(app);
  const { data: session } = useSession();
  const [userProfile,setuserProfile]=useState([])
   

  useEffect(() => {
    if(session){
      userPost()
    }else{
         router.push("/")
    }
   
  }, [session]);

  const userPost = async () => {
    const q = query(
      collection(db, "posts"),
      where("email", "==", session?.user?.email)
    );

    const querySnapshot = await getDocs(q);

    const posts =[]
    querySnapshot.forEach((doc) => {

        posts.push({id:doc.id, ...doc.data()})
  
    //   setuserProfile(Profile=>[...Profile,doc.data()])
    });
    setuserProfile(posts);
  };

  const handleDelete= async(id)=>{
    await deleteDoc(doc(db, "posts",id));
    const notify = () => toast("post was successfully created");
    notify();
    setuserProfile((prev)=>prev.filter((post)=>post.id !== id));
    setTimeout(()=>{
        router.push('/')
    },2000);
  }

  return <div className="m-20">
    <ToastContainer />

    <h1 className="my-10 font-bold text-[35px] text-amber-600 text-center">Your Posts</h1>
     <div className='flex items-center justify-center gap-2 flex-wrap mt-10'>
    {userProfile.map((item,index)=>(
        <div className="relative">
        <PostDetails key={index} post={item}/>
        <button
        onClick={()=>handleDelete(item.id)} 
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-600 text-white px-1 py-1 rounded-full">
            <IoCloseSharp />
        </button>
        </div>
    ))}
    </div>

  </div>;
};

export default Profile;
