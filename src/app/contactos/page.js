"use client";
import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact.form";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.pagecontactos}>
          <h1>{t("contactForm.title")}</h1>
          <div className={styles.pagecontactos_locais}>
            <div className={styles.lxSede}>
              <h1>{t("home.headquartersTitle")}</h1>
              <div className={styles.infolocalSede}>
                <p>{t("home.headquartersAddress")}</p>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>{t("home.telephone")}</p>
                  <p>+351 21 778 85 76</p>
                </div>
                <div className={styles.letrasCoresSede}>
                  <p className={styles.red2}>{t("home.fax")} </p>
                  <p>+351 21 778 12 05</p>
                </div>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>{t("home.mobile")} </p>
                  <p>+351 96 405 14 54 (24 horas)</p>
                </div>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>{t('home.email')}</p>
                  <p>geral.lisboa@ngsadvogados.com</p>
                </div>
              </div>
            </div>
            <div className={styles.norteSede}>
              <h1>{t('home.northBranchTitle')}</h1>
              <div className={styles.infolocalSede}>
                <p>{t('home.northBranchAddress')}</p>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>{t('home.telephone')} </p>
                  <p>+351 25 314 96 16</p>
                </div>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>{t('home.fax')} </p>
                  <p>+351 25 314 96 18</p>
                </div>

                <div className={styles.letrasCores}>
                  <p className={styles.red2}>E-mail</p>
                  <p>geral.barcelos@ngsadvogados.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </main>

      <footer className={styles.footer2}>
        <div className={styles.assin}>
          <p>
            © 2024 NGS - Leão e Associados. All rights reserved. | Powered by
            STEP
          </p>
        </div>
      </footer>
    </div>
  );
}
