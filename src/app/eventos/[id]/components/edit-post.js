import React, { useState, useMemo, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateDoc, doc } from "firebase/firestore";
import { db, storage } from "../../../../../firebase";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const EditPost = ({ post, setEditing }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const [headline, setHeadline] = useState("");
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [editorHtml, setEditorHtml] = useState("");
  const [headlineError, setHeadlineError] = useState("");
  const [coverPhotoError, setCoverPhotoError] = useState("");
  const [editorHtmlError, setEditorHtmlError] = useState("");

  useEffect(() => {
    if (post) {
      setHeadline(post.headline);
      setEditorHtml(post.body);
      // Set the cover photo if it exists in the post

      setCoverPhoto(post.coverPhoto);
    }
  }, [post]);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const handlePost = async () => {
    // Reset error messages
    setHeadlineError("");
    setCoverPhotoError("");
    setEditorHtmlError("");

    let isValid = true;

    // Validate headline
    if (!headline) {
      setHeadlineError("Por favor, preencha o título.");
      isValid = false;
    }

    // Validate cover photo
    if (!coverPhoto) {
      setCoverPhotoError("Por favor, selecione uma imagem de capa.");
      isValid = false;
    }

    // Validate editor HTML
    if (!editorHtml.trim()) {
      setEditorHtmlError("Por favor, escreva o corpo do post.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Upload cover photo to Firebase Storage only if there's a new cover photo selected
    let coverPhotoUrl = coverPhoto;
    if (coverPhoto && typeof coverPhoto !== "string") {
      const storageRef = ref(storage, `cover_photos/${coverPhoto.name}`);
      await uploadBytes(storageRef, coverPhoto);
      coverPhotoUrl = await getDownloadURL(storageRef);
    }

    if (post) {
      // Update existing post data in Firestore

      const postRef = doc(db, "posts", post.id);
      await updateDoc(postRef, {
        headline: headline,
        coverPhoto: coverPhotoUrl,
        body: editorHtml,
      });
    }

    // Reset form fields
    setHeadline("");
    setCoverPhoto(null);
    setEditorHtml("");
    setEditing(false);

    // Update list of posts (assuming this is handled outside of this component)
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(file);
  };

  return (
    <div>
      <div>
        <label>Título:</label>
        <input
          type="text"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
        {headlineError && <p style={{ color: "red" }}>{headlineError}</p>}
      </div>

      <div>
        <label>Imagem de capa:</label>
        <input type="file" accept="image/*" onChange={handleCoverPhotoChange} />

        <img src={coverPhoto} alt="Capa do post" width={30} />
        {coverPhotoError && <p style={{ color: "red" }}>{coverPhotoError}</p>}
      </div>
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={editorHtml}
        onChange={handleChange}
      />
      {editorHtmlError && <p style={{ color: "red" }}>{editorHtmlError}</p>}
      <button onClick={handlePost}>Confirmar alterações</button>
    </div>
  );
};

export default EditPost;
