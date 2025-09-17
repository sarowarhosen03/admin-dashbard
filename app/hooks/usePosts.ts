// /posts → Posts Page
// Fetch posts from: https://jsonplaceholder.typicode.com/posts.
import { useEffect, useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return { posts };
};
