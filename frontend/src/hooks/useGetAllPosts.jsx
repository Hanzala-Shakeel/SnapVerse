import { useEffect, useContext } from "react";
import { PostsContext } from "@/context/postsContext";
import axios from "axios";

const useGetAllPosts = () => {
  const { setPosts } = useContext(PostsContext);
  useEffect(() => {
    async function fetchAllPosts() {
      try {
        const res = await axios.get("https://snapverse-production-9bac.up.railway.app/post/all", {
          withCredentials: true,
        });
        if (res.status === 200) {
          setPosts(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllPosts();
  }, []);
};

export default useGetAllPosts;
