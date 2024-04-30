"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import { formatDate } from "@/utils";
import styles from "../../page.module.css";
import Image from "next/image";

const Post = () => {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "posts", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return null;

  return (
    <div className={styles.container}>
      <div className={styles.headerPost}>
        <Image
          src="/logoNGSpequeno.png"
          alt="Logo da Clínica Veterinária"
          width={130}
          height={70}
          style={{
            height: "auto",
            width: "100px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        />
        <h1 className={styles.title} style={{ marginTop: "0%" }}>
          {post.headline}
        </h1>
        <button
          className={styles.button}
          onClick={() => router.push("/publicacoes")}
        >
          Voltar
        </button>
      </div>
      <div className={styles.postIndividual}>
        {post.coverPhoto && (
          <img
            src={post.coverPhoto}
            alt="Cover"
            className={styles.imgresponsive}
          />
        )}
        {/*Aqui ql-editor*/}
        <div
          className={`${styles.editorContent} ql-editor`}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
        <p className={styles.timestamp}>{formatDate(post.timestamp)}</p>{" "}
      </div>
    </div>
  );
};

export default Post;
