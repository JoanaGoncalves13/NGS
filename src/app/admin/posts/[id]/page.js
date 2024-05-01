"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Changed from next/navigation
import { doc, getDoc, deleteDoc } from "firebase/firestore"; // Added deleteDoc
import { db } from "../../../../../firebase";
import EditPost from "./components/edit-post";
import { formatDate } from "@/utils";
import styles from "../../../page.module.css";
import Image from "next/image";

const Post = () => {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);

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
  }, [id, editing]);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "posts", id));
      console.log("Document successfully deleted!");
      router.push("/admin"); // Redirect to home page or any other page after deletion
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  if (!post) return;

  return (
    <>
      {!editing ? (
        <>
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
              <a onClick={() => router.push("/admin/posts")}>
                <button className={styles.button}>Voltar</button>
              </a>
            </div>
            <div className={styles.postIndividual}>
              {post.coverPhoto && (
                <img
                  src={post.coverPhoto}
                  alt="Cover"
                  className={styles.imgresponsive}
                />
              )}
              <div
                className={`${styles.editorContent} ql-editor`}
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
              <p className={styles.timestamp}>{formatDate(post.timestamp)}</p>{" "}
            </div>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <button className={styles.buttonDelete} onClick={handleDelete}>
              Apagar
            </button>
            <button
              className={styles.buttonEdit}
              onClick={() => setEditing(true)}
            >
              Editar
            </button>
          </div>
        </>
      ) : (
        <EditPost {...{ post, setEditing }} />
      )}
    </>
  );
};

export default Post;
