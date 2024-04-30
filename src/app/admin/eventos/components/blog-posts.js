import React, { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils";
import styles from "../../../page.module.css";

const BlogPosts = ({ posts, setPosts, addingPost, search }) => {
  const router = useRouter();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "eventos");
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
    if (body.length > 300) {
      return body.slice(0, 200) + "...";
    }
    return body;
  };

  return (
    <div className={styles.pub}>
      {filteredPosts.map((post, index) => (
        <div
          className={
            index % 2 === 0 ? styles.quadradoinfo : styles.quadradoinfoVermelho
          }
          onClick={() => router.push(`/admin/eventos/${post.id}`)}
        >
          <div className={styles.quadradoImagem}>
            <img
              src={post.coverPhoto}
              alt="logoPequeno"
              style={{ width: "220px", height: "auto" }}
            />
          </div>
          <div className={styles.quadradotexto}>
            <div className={styles.post}>
              <div className={styles.postinfo}>
                <h1 style={{ color: "black" }}>{post.headline}</h1>
                <p>{formatDate(post.timestamp)}</p>
              </div>
              <button className={styles.buttonRed}>Ver mais</button>
            </div>
            <div className={styles.conteudo}>
              <div
                style={{ color: "black" }}
                className={styles.conteudoletra}
                dangerouslySetInnerHTML={{
                  __html: truncateBody(post.body),
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
