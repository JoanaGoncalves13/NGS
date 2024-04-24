"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // Changed from next/navigation
import { doc, getDoc } from "firebase/firestore"; // Added deleteDoc
import { db } from "../../../../firebase";
import { formatDate } from "@/utils";

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

  if (!post) return;

  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Post</h1>
      <button onClick={() => router.push("/publicacoes")}>Voltar</button>
      <div>
        <h2>{post.headline}</h2>
        {post.coverPhoto && <img src={post.coverPhoto} alt="Cover" />}
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{
            __html: post.body,
          }}
        />
        <p>{formatDate(post.timestamp)}</p>
      </div>
    </div>
  );
};

export default Post;
