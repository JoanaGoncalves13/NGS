"use client"
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact.form";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.imageInicial2}>
          <img
            src={"/biblioteca.jpg"}
            width={6000}
            height={7828}
            alt="logo"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className={styles.quadrado}>
            <div className={styles.quadrado_texto}>
              <h1>{t('what.practiceAreas')}</h1>
            </div>
          </div>
        </div>

        <div className={styles.servicos}>
          <div className={styles.servicos_texto}>
            <p>{t('what.serviceDescription')}</p>
            <p>{t('what.businessLaw')}</p>
            <button>{t('what.contactUs')}</button>
          </div>
          <div className={styles.areas_imagem}>
            <img
              src={"/maos.jpg"}
              width={7000}
              height={7828}
              alt="logo"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        <div className={styles.areas}>
          <div className={styles.areas_imagem}>
            <img
              src={"/assin.jpg"}
              width={7000}
              height={7828}
              alt="logo"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className={styles.areas_texto}>
            <p>{t('what.humanRights')}</p>
            <p>{t('what.laborLitigation')}</p>
            <p>{t('what.generalLitigation')}</p>
            <p>{t('what.contracts')}</p>
          </div>
        </div>

        <h1 className={styles.hono_title}>{t('what.feesTitle')}</h1>
        <div className={styles.honorarios}>
          <div className={styles.honorarios_texto}>
            <p>{t('what.feesDescription')}</p>
            <p>{t('what.notarialServices')}</p>
          </div>
          <div className={styles.honorarios_imagem}>
            <img
              src={"/books.jpg"}
              width={7000}
              height={7828}
              alt="books"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        <ContactForm />
      </main>

      <footer className={styles.footer}>
        <div className={styles.localizacoes}>
          <div className={styles.lx}>
            <h1>{t('home.headquartersTitle')}</h1>
            <div className={styles.infolocal}>
              <p>{t('home.headquartersAddress')}</p>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t('home.telephone')}</p>
                <p>+351 21 778 85 76</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t('home.fax')}</p>
                <p>+351 21 778 12 05</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t('home.mobile')}</p>
                <p>+351 96 405 14 54 (24 horas)</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t('home.email')}</p>
                <p>geral.lisboa@ngsadvogados.com</p>
              </div>
            </div>
          </div>
          <div className={styles.norte}>
            <h1>{t('home.northBranchTitle')}</h1>
            <div className={styles.infolocal}>
              <p>{t('home.northBranchAddress')}</p>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t('home.telephone')}</p>
                <p>+351 25 314 96 16</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t('home.fax')}</p>
                <p>+351 25 314 96 18</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t('home.email')}</p>
                <p>geral.barcelos@ngsadvogados.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.assin}>
          <p>{t('home.footerRights')}</p>
        </div>
      </footer>
    </div>
  );
}