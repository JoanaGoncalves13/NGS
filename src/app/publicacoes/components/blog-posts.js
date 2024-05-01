import React, { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils";
import styles from "../../page.module.css";
import Newsletter from "./newsletter";
import { useLanguage } from "@/context/LanguageContext";

const BlogPosts = ({ posts, setPosts, addingPost, search }) => {
  const { t } = useLanguage();

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
    if (body.trim().length > 300) {
      return body.trim().slice(0, 200) + "...";
    }
    return body;
  };

  return (
    <>
      <div className={styles.publicacoes}>
        <h1>{t("blogPosts.title")}</h1>
        <Newsletter />
      </div>
      {filteredPosts.map((post, index) => (
        <div
          className={
            index % 2 === 0 ? styles.quadradoinfo : styles.quadradoinfoVermelho
          }
          onClick={() => router.push(`/publicacoes/${post.id}`)}
        >
          <div className={styles.quadradoImagem}>
            <img src={post.coverPhoto} alt="logoPequeno" />
          </div>
          <div className={styles.quadradotexto}>
            <div className={styles.post}>
              <div className={styles.postinfo}>
                <h1 style={{ color: "black" }}>{post.headline}</h1>
                <p>{formatDate(post.timestamp)}</p>
              </div>
              <button className={styles.buttonRed}>
                {t("blogPosts.viewMore")}
              </button>
            </div>
            <div className={styles.conteudo}>
              <div
                style={{ color: "black" }}
                className="ql-editor"
                dangerouslySetInnerHTML={{
                  __html: truncateBody(post.body),
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogPosts;
