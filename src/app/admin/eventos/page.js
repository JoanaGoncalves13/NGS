"use client";
import React from "react";
import AddPost from "./components/add-post";
import BlogPosts from "./components/blog-posts";
import Search from "./components/search";

import { useState } from "react";

const Eventos = () => {
  const [posts, setPosts] = useState([]);
  const [addingPost, setAddingPost] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Página Admin Eventos</h1>
      <AddPost {...{ addingPost, setAddingPost }} />
      <Search {...{ search, setSearch }} />
      <BlogPosts {...{ posts, setPosts, addingPost, search }} />
    </div>
  );
};

export default Eventos;
