"use client";
import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import ContactForm from "./components/contact.form";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const QuemSomos = () => {
    router.push("/quemsomos");
  };
  const Eventos = () => {
    router.push("/eventos");
  };
  const OqueFazemos = () => {
    router.push("/oquefazemos");
  };
  const Blog = () => {
    router.push("/publicacoes");
  };

  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.imageInicial}>
          <img src={"/imagemPortugal.jpg"} alt="logo" />
          <div className={styles.quadradoInicial}>
            <div className={styles.quadradoInicial_imagem}>
              <img
                src={"./logoNGS.png"}
                alt="logoPequeno"
                style={{ minWidth: "100%", height: "auto" }}
              />
            </div>
            <div className={styles.quadradoInicial_texto}>
              <p>{t("welcomeCountries1")}</p>
              <p>{t("welcomeCountries2")}</p>
              <p>{t("welcomeCountries3")}</p>
              <p>{t("welcomeCountries4")}</p>
            </div>
          </div>
        </div>
        <div className={styles.informacoes}>
          <div className={styles.info1}>
            <div className={styles.quadradotransparente_info}>
              <h1>{t("getToKnowUsTitle")}</h1>
              <p>{t("getToKnowUsDescription")}</p>
              <button className={styles.button1} onClick={QuemSomos}>
                {t("getToKnowUsButton")}
              </button>
            </div>
            <div className={styles.quadradovermelho_info}>
              <h1>{t("whatWeDoTitle")}</h1>
              <p>{t("whatWeDoDescription")}</p>
              <button className={styles.button2} onClick={OqueFazemos}>
                {t("whatWeDoButton")}
              </button>
            </div>
          </div>
          <div className={styles.info1}>
            <div className={styles.quadradovermelho_info}>
              <h1>{t("stayUpdatedTitle")}</h1>
              <p>{t("stayUpdatedDescription")}</p>
              <button className={styles.button2} onClick={Blog}>
                {t("stayUpdatedButton")}
              </button>
            </div>
            <div className={styles.quadradotransparente_info}>
              <h1>{t("eventsTitle")}</h1>
              <p>{t("eventsDescription")}</p>
              <button className={styles.button1} onClick={Eventos}>
                {t("eventsButton")}
              </button>
            </div>
          </div>
        </div>
        <ContactForm />
      </main>

      <footer className={styles.footer}>
        <div className={styles.localizacoes}>
          <div className={styles.lx}>
            <h1>{t("footerHeadquartersTitle")}</h1>
            <div className={styles.infolocal}>
              <p>{t("footerAddressLisbon")}</p>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("footerContactTelephone")}</p>
                <p>{t("footerContactNumberLisbonPhone")}</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("footerContactFax")}</p>
                <p>{t("footerContactNumberLisbonFax")}</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("footerContactMobile")}</p>
                <p>{t("footerContactNumberLisbonMobile")}</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("footerContactEmail")}</p>
                <p>{t("footerContactNumberLisbonEmail")}</p>
              </div>
            </div>
          </div>
          <div className={styles.norte}>
            <h1>{t("footerNorthBranchTitle")}</h1>
            <div className={styles.infolocal}>
              <p>{t("footerAddressBarcelos")}</p>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("footerContactTelephone")}</p>
                <p>{t("footerContactNumberBarcelosPhone")}</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("footerContactFax")}</p>
                <p>{t("footerContactNumberBarcelosFax")}</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>{t("footerContactEmail")}</p>
                <p>{t("footerContactNumberBarcelosEmail")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.assin}>
          <p>{t("footerRights")}</p>
        </div>
      </footer>
    </div>
  );
}
