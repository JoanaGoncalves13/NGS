import React, { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils";

const BlogPosts = ({ posts, setPosts, addingPost, search }) => {
  const router = useRouter();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "posts");
      const q = query(postsCollection, orderBy("timestamp", "desc"));
      const fetchedPosts = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        fetchedPosts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, [addingPost]);

  // Filtering posts based on search query
  useEffect(() => {
    if (search !== "") {
      const filtered = posts.filter(
        (post) =>
          post.headline.toLowerCase().includes(search.toLowerCase()) ||
          post.body.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts); // If search query is empty, display all posts
    }
  }, [search, posts]);

  const truncateBody = (body) => {
    console.log(body.trim());
    if (body.trim().length > 300) {
      return body.trim().slice(0, 200) + "...";
    }
    return body;
  };

  return (
    <div>
      <h1>Todas as publicações:</h1>
      {filteredPosts.map((post) => (
        <div
          key={post.id}
          onClick={() => router.push(`/admin/posts/${post.id}`)}
        >
          <h2>{post.headline}</h2>
          {post.coverPhoto && <img src={post.coverPhoto} alt="Cover" />}
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{
              __html: truncateBody(post.body),
            }}
          />
          <p>{formatDate(post.timestamp)}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
