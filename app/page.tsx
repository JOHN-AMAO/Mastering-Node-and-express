"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/database");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <main className='flex min-h-screen text-white flex-col '>
      <div className='flex flex-row justify-between'>
        <h1 className='p-5 m-10'>Home page</h1>
        <Link
          href='/post'
          className='bg-white text-black p-4 m-10'
        >
          Post
        </Link>
      </div>
      {data.map((user: any, key: any) => (
        <div
          key={key}
          className='m-5 bg-white text-blue-900 flex flex-row justify-between'
        >
          <div className='m-3'>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p> {user.class}</p>
          </div>
          <button className='bg-red text-red-800 p-4'>Delete</button>
        </div>
      ))}
    </main>
  );
}
