"use client";
import Image from "next/image";
import Head from "next/head";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact.form";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const Contacto = () => {
    router.push("/contactos");
  };

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.imageInicial2}>
          <img
            src={"/pexels-skitterphoto-442420.jpg"}
            width={4000}
            height={5828}
            alt="logo"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className={styles.quadrado}>
            <div className={styles.quadrado_texto}>
              <h1>{t("home.title")}</h1>
            </div>
          </div>
        </div>
        <div className={styles.sociedade}>
          <div className={styles.sociedade_imagem}>
            <img
              src={"/pexels-sora-shimazaki-5669602.jpg"}
              width={4000}
              height={5828}
              alt="logo"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                maxHeight: "530px",
              }}
            />
          </div>
          <div className={styles.sociedade_texto}>
            <p>{t("home.description1")}</p>
            <p>{t("home.description2")}</p>
            <button onClick={Contacto}>{t("home.contactUs")}</button>
          </div>
        </div>
        <div className={styles.sociedade}>
          <div className={styles.sociedade_texto}>
            <p>{t("home.description3")}</p>
            <p>{t("home.description4")}</p>
            <button onClick={Contacto}>{t("home.contactUs")}</button>
          </div>
          <div className={styles.sociedade_imagem}>
            <img
              src={"/analisa.jpg"}
              width={4000}
              height={5828}
              alt="logo"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                maxHeight: "530px",
              }}
            />
          </div>
        </div>
        <ContactForm />
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
