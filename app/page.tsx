"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/comments", {
    cache: "force-cache",
  }).then((res) => res.json());

  return posts.map((params: any) => ({
    id: String(params.id),
  }));
}

export default function Home() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments",
          {
            cache: "force-cache",
          }
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchComments();
  }, []);
  console.log("response data : ", comments);
  return (
    <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto mt-3">
      {comments?.map((params, idx) => (
        <div className="border border-black">
          <p>{params.name}</p>
          <p>{params.email}</p>
          <p>{params.body}</p>
        </div>
      ))}
    </div>
  );
}
