"use client";

import React, { useEffect, useState } from "react";

type Post = {
  title: string;
  body: string;
};

export default function UserComponent() {
  const [data, setData] = React.useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => {
          console.log({ json });
          setData({ title: json.title, body: json.body });

          setLoading(false);
        });
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>This is user-component component</h1>
      {loading || !data ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Title: {data?.title}</p>
          <p>Body: {data?.body}</p>
        </>
      )}
    </div>
  );
}
