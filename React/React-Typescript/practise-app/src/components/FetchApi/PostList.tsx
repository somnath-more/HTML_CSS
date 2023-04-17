import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then((res: any) => {
        console.log(res);
        setPosts(res.data); // fix: setPosts to res.data
      })
      .catch((err: any) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
      <h1>List of Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;

