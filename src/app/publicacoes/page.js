"use client";

import React, { useState } from "react";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

import BlogPosts from "./components/blog-posts";

export default function Home() {
  const { t } = useLanguage();

  const [posts, setPosts] = useState([]);
  const [addingPost, setAddingPost] = useState(false);
  const search = "";
  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        <BlogPosts {...{ posts, setPosts, addingPost, search }} />
      </main>

      <footer className={styles.footer}>
        <div className={styles.localizacoes}>
          <div className={styles.lx}>
            <h1>{t("home.headquartersTitle")}</h1>
            <div className={styles.infolocal}>
              <p>{t("home.headquartersAddress")}</p>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("home.telephone")}</p>
                <p>+351 21 778 85 76</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("home.fax")}</p>
                <p>+351 21 778 12 05</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("home.mobile")}</p>
                <p>+351 96 405 14 54 (24 horas)</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("home.email")}</p>
                <p>geral.lisboa@ngsadvogados.com</p>
              </div>
            </div>
          </div>
          <div className={styles.norte}>
            <h1>{t("home.northBranchTitle")}</h1>
            <div className={styles.infolocal}>
              <p>{t("home.northBranchAddress")}</p>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("home.telephone")}</p>
                <p>+351 25 314 96 16</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("home.fax")}</p>
                <p>+351 25 314 96 18</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("home.email")}</p>
                <p>geral.barcelos@ngsadvogados.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.assin}>
          <p>{t("home.footerRights")}</p>
        </div>
      </footer>
    </div>
  );
}
