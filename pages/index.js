import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Hero from "./components/Hero";
import Search from "./components/Search";
import GameImages from "./components/GameImages";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import app from "@/config/firebase";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [posts,setposts]=useState([])
  const [allPosts,setallPosts] = useState()

  useEffect(()=>{
    getPost()

  },[])

  const db = getFirestore(app);

  const getPost= async ()=>{
    const QurySnapShoot =  await getDocs(collection(db,'posts'));
    const fetchedPosts = [];
    QurySnapShoot.forEach((docs)=>{
      fetchedPosts.push(docs.data());
    })


    const post =[]
    QurySnapShoot.forEach((docs)=>{

      post.push(docs.data())
      setallPosts(fetchedPosts)
    });

    setposts(post);
  }

  const handleSearch =(text)=>{

    const filtered=allPosts.filter((post)=>
      post.title.toLowerCase().includes(text.toLowerCase())
    )

    setposts(filtered)




  }



  return (
     <>
      <Head>
        <title>Player - Share Your Posts</title>
        <meta 
          name="description" 
          content="Player - منصة اجتماعية لمشاركة البوستات واللحظات المميزة. انشر واستكشف محتوى رائع مع المجتمع." 
        />
        <link rel="icon" href="/images/logo.png" />
        {/* أو استخدم أيقونة emoji مباشرة */}
        <meta name="theme-color" content="#3B82F6" />
      </Head>
    <div>
      <Hero/>
      <Search onSearch={handleSearch}/>
      <GameImages/>
      {posts?<Posts posts={posts}/>:null}
      
    </div>
    </>
  );
}
