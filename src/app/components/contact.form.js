"use client";
import React, { useState } from "react";
import styles from "../page.module.css";

const ContactForm = () => {
  const [interests, setInterests] = useState([]);

  async function sendEmails(formData) {
    const formDataParams = new URLSearchParams(formData);

    try {
      const url = `https://step-server-tqom.onrender.com/ngs2?${formDataParams.toString()}`;

      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      alert("Obrigado pelo seu contacto");
    } catch (err) {
      console.error(err);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("interests", interests.join(","));
    try {
      await sendEmails(formData);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleInterestChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  };

  return (
    <div className={styles.contactos}>
      <div className={styles.mapa}>
        <iframe
          src="https://www.google.com/maps/d/u/4/embed?mid=1Wm7VX_0h1gwEq8Pngv2ZbeS1XfqYruI&ehbc=2E312F&noprof=1"
          width="640"
          height="480"
          style={{
            border: 0,
            borderRadius: "10px",
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <div className={styles.contactos_texto}>
        <h1>Contacte-nos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Nome "
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="Telefone"
          />

          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email "
          />

          <textarea
            id="message"
            name="message"
            required
            placeholder="Descreva-nos o seu problema"
          ></textarea>

          <h2>Áreas de interesse</h2>

          <label htmlFor="civil">
            <input
              type="checkbox"
              name="interest"
              value="Direito Civil"
              onChange={handleInterestChange}
            />{" "}
            Direito Civil
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="Direito Criminal"
              onChange={handleInterestChange}
            />{" "}
            Direito Criminal
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="Direito Fiscal"
              onChange={handleInterestChange}
            />{" "}
            Direito Fiscal
          </label>
          <label>
            <input
              type="checkbox"
              name="interest"
              value="Direito Comercial"
              onChange={handleInterestChange}
            />{" "}
            Direito Comercial
          </label>
          <button type="submit">Submeter</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
