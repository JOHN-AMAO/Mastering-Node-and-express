"use client";
import axios from "axios";
import { useEffect, useState } from "react";

interface BlogContent {
  title: string;
  content: string;
}
const Page = () => {
  const [data, setData] = useState<BlogContent[]>([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/blog");
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((content: any, key: any) => (
        <div key={key}>
          <h1>{content.title}</h1>
          <p>{content.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
