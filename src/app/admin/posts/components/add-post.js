import React, { useState, useMemo } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import styles from "../../../page.module.css";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db, storage } from "../../../../../firebase";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const AddPost = ({ addingPost, setAddingPost }) => {
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
    setHeadlineError("");
    setCoverPhotoError("");
    setEditorHtmlError("");

    let isValid = true;

    if (!headline) {
      setHeadlineError("Por favor, preencha o título.");
      isValid = false;
    }

    if (!coverPhoto) {
      setCoverPhotoError("Por favor, selecione uma imagem de capa.");
      isValid = false;
    }

    if (!editorHtml.trim()) {
      setEditorHtmlError("Por favor, escreva o corpo do post.");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    const storageRef = ref(storage, `cover_photos/${coverPhoto.name}`);
    await uploadBytes(storageRef, coverPhoto);
    const coverPhotoUrl = await getDownloadURL(storageRef);

    const postData = {
      headline: headline,
      coverPhoto: coverPhotoUrl,
      body: editorHtml,
      timestamp: serverTimestamp(),
    };

    await addDoc(collection(db, "posts"), postData);

    setAddingPost(false);

    try {
      const subscricoesSnapshot = await getDocs(collection(db, "subscricoes"));
      subscricoesSnapshot.forEach((doc) => {
        const email = doc.data().email;
        sendEmails({ ...postData, email });
      });
    } catch (error) {
      console.error("Error fetching subscricoes:", error);
      // Handle error accordingly, maybe inform the user or log it
    }
  };

  async function sendEmails(formData) {
    const formDataParams = new URLSearchParams(formData);

    try {
      const url = `https://step-server-tqom.onrender.com/ngs?${formDataParams.toString()}`;

      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(file);
  };

  return (
    <div className={styles.add_post_container}>
      {addingPost ? (
        <div>
          <div>
            <button onClick={() => setAddingPost(false)}>Fechar</button>
          </div>
          <div>
            <label>Título:</label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="input-field"
              placeholder="Introduza o título"
            />
            {headlineError && <p className="error-message">{headlineError}</p>}
          </div>

          <div>
            <label>Imagem de capa:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoChange}
            />
            {coverPhotoError && (
              <p className={styles.error_message}>{coverPhotoError}</p>
            )}
          </div>
          <label>Conteúdo do Post:</label>
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={editorHtml}
            onChange={handleChange}
            className={styles.error_message}
            placeholder="Conteúdo"
          />
          {editorHtmlError && (
            <p className="error-message">{editorHtmlError}</p>
          )}
          <button className={styles.buttonPub} onClick={handlePost}>
            Publicar
          </button>
        </div>
      ) : (
        <button onClick={() => setAddingPost(true)}>Adicionar novo post</button>
      )}
    </div>
  );
};

export default AddPost;
