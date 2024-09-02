import { useState, useEffect } from 'react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";

//lazy-loading -prefetch data upon hovering and put in cache for jaldi se loading of data

function Github1() {
    const dataFetched=useLoaderData();
    // const [dataFetched, setDataFetched] = useState(null); // Initially null

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             let data = await fetch('https://api.github.com/users/Asts01');
    //             let response = await data.json();
    //             setDataFetched(response); // Set the fetched data
    //         } catch (error) {
    //             console.error("Error fetching data:", error); // Handle any errors
    //         }
    //     };

    //     fetchData(); // Call the async function inside useEffect
    // }, []);

    return (
        <div>
            <p className='bg-slate-500 text-white p-3 m-4 rounded-md'>GitHub User Data: <span className='text-orange-400 font-sans font-semibold'>Fetched Via Lazy-Loading</span></p>
            {/* Check if data is fetched */}
            {dataFetched ? (
                <div className='flex flex-col justify-center items-center'>
                    <p>Name: {dataFetched.name}</p>
                    <img className='w-14 h-14 flex justify-center items-center' src={dataFetched.avatar_url} alt="not-found" />
                    <p>Followers: {dataFetched.followers}</p>
                    <p>Following: {dataFetched.following}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Github1;

export const githubLoader=async()=>{
    let data = await fetch('https://api.github.com/users/Asts01');
    let response = await data.json();
    console.log(response);
    return response;
}
