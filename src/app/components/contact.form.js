"use client";
import React, { useState } from "react";
import styles from "../page.module.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [interests, setInterests] = useState([]);

  async function sendEmails(formData) {
    const formDataParams = new URLSearchParams(formData);

    try {
      const url = `https://step-server-tqom.onrender.com/ngs2?${formDataParams.toString()}`;
      const response = await fetch(url, { method: "GET" });

      if (!response.ok) {
        throw new Error(`${t("contactForm.errorMessage")}: ${response.status}`);
      }
      alert(t("contactForm.thanksMessage"));
    } catch (err) {
      console.error(err.message);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("interests", interests.join(","));
    await sendEmails(formData);
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
        <h1>{t("contactForm.title")}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder={t("contactForm.namePlaceholder")}
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder={t("contactForm.phonePlaceholder")}
          />
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={t("contactForm.emailPlaceholder")}
          />
          <textarea
            id="message"
            name="message"
            required
            placeholder={t("contactForm.messagePlaceholder")}
            style={{
              width: "100%",
              height: "50px",
              resize: "none",
              fontSize: "17px",
              fontWeight: 100,
            }}
          ></textarea>
          <h2>{t("contactForm.interestAreas")}</h2>
          {["civilLaw", "criminalLaw", "taxLaw", "commercialLaw"].map((law) => (
            <label key={law}>
              <input
                type="checkbox"
                name="interest"
                value={t(`contactForm.${law}`)}
                onChange={handleInterestChange}
              />{" "}
              {t(`contactForm.${law}`)}
            </label>
          ))}
          <button type="submit">{t("contactForm.submit")}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
