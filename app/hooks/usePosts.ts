// /posts → Posts Page
// Fetch posts from: https://jsonplaceholder.typicode.com/posts.
import { useFetch } from "./useFetch";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const usePosts = () => {
  const {
    data: posts,
    loading,
    error,
  } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  return { posts: posts || [], loading, error };
};
