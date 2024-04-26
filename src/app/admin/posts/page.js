"use client";
import React from "react";
import AddPost from "./components/add-post";
import BlogPosts from "./components/blog-posts";
import Search from "./components/search";
import { useState } from "react";

import styles from "../../page.module.css";
import Image from "next/image";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [addingPost, setAddingPost] = useState(false);
  const [search, setSearch] = useState("");

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
        <a href="/admin">
          <button className={styles.button}>Voltar</button>
        </a>
      </div>
      <h1>Gestão de Publicações</h1>
      <AddPost {...{ addingPost, setAddingPost }} />
      <Search {...{ search, setSearch }} />
      <BlogPosts {...{ posts, setPosts, addingPost, search }} />
    </div>
  );
};

export default Posts;
