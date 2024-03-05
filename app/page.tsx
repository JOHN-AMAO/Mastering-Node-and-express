"use client";
import axios from "axios";
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
    <main className='flex min-h-screen text-white flex-col items-center justify-between p-24'>
      <h1>Home page</h1>
      {data.map((user: any, key: any) => (
        <h1 key={key}>{user.name}</h1>
      ))}
    </main>
  );
}
