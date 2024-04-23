"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Changed from next/navigation
import { doc, getDoc, deleteDoc } from "firebase/firestore"; // Added deleteDoc
import { db } from "../../../../../firebase";
import EditPost from "./components/edit-post";

const Post = () => {
  const { id } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "eventos", id);
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
    <div style={{ backgroundColor: "black" }}>
      <h1>Evento</h1>

      {!editing ? (
        <div>
          <h2>{post.headline}</h2>
          {post.coverPhoto && <img src={post.coverPhoto} alt="Cover" />}
          <div
            className="ql-editor"
            dangerouslySetInnerHTML={{
              __html: post.body,
            }}
          />
          {/*  <p>{formatDate(post.timestamp)}</p> */}
          <button onClick={handleDelete}>Apagar</button>
          <button onClick={() => setEditing(true)}>Editar</button>
        </div>
      ) : (
        <EditPost {...{ post, setEditing }} />
      )}
    </div>
  );
};

export default Post;
