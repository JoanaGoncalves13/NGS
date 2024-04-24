"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase";

import styles from "../../page.module.css";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interests: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, name],
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter((interest) => interest !== name),
      });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const newsletterData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        interests: formData.interests,
      };
      console.log(newsletterData);
      // Add a new document with a generated id to the "newsletter" collection
      const docRef = await addDoc(
        collection(db, "subscricoes"),
        newsletterData
      );
      console.log("Document written with ID: ", docRef.id);

      // Reset form fields after submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        interests: [],
      });
      alert("Subscrição efetuada com sucesso!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className={styles.subscricoes}>
      <div className={styles.subscricoes_subs}>
        <div className={styles.subscricoes_texto}>
          <h1>Subscreva a nossa Newsletter</h1>
          <p>
            E fique a par das nossas publicações acerca das suas áreas de
            interesse.
          </p>
        </div>
        <div className={styles.subscricoes_info}>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Nome "
            />

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Telefone"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Email "
            />
          </form>
        </div>
      </div>
      <div className={styles.subscricoes_areas}>
        <h1>Áreas interesses</h1>
        <div className={styles.form}>
          <label>
            <input
              type="checkbox"
              name="Direito Civil"
              checked={formData.interests.includes("Direito Civil")}
              onChange={handleCheckboxChange}
            />
            Direito Civil
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Direito Criminal"
              checked={formData.interests.includes("Direito Criminal")}
              onChange={handleCheckboxChange}
            />
            Direito Criminal
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Direito Fiscal"
              checked={formData.interests.includes("Direito Fiscal")}
              onChange={handleCheckboxChange}
            />
            Direito Fiscal
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="Direito Comercial"
              checked={formData.interests.includes("Direito Comercial")}
              onChange={handleCheckboxChange}
            />
            Direito Comercial
          </label>
          <br />
          <button onClick={handleFormSubmit} type="submit">Submeter</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
