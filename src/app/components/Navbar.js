"use client"
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("pt");
  const router = useRouter();

  useEffect(() => {
    const savedLanguage =
      typeof window !== "undefined" ? localStorage.getItem("language") : null;
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      console.log("lang changed");
      setCurrentLanguage(savedLanguage);
    }
  }, [i18n]);

  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const flags = {
    pt: { name: "Português", svg: "/flags/portugal.svg" },
    en: { name: "English", svg: "/flags/uk.svg" },
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }
  };

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>NGS | Leão e Associados</title>
        <meta
          name="description"
          content="NGS Leão e Associados, Sociedade de Advogados, SP, RL."
        />
      </Head>
      {windowWidth != 0 ? (
        <>
          {windowWidth >= 1000 ? (
            <>
              <header className={styles.header}>
                <div className={styles.headerImagem}>
                  <a
                    onClick={() => navigate("/")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/logoNGSpequeno.png"
                      alt="Logo"
                      loading="lazy"
                      width={130}
                      height={70}
                      style={{
                        height: "auto",
                        width: "100px",
                        backgroundColor: "white",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                </div>
                <div className={styles.headerTexto}>
                  <a onClick={() => navigate("/quemsomos")}>
                    <p>{t("navbar.whoWeAre")}</p>
                  </a>
                  <a onClick={() => navigate("/oquefazemos")}>
                    <p>{t("navbar.whatWeDo")}</p>
                  </a>
                  <a onClick={() => navigate("/publicacoes")}>
                    <p>{t("navbar.publications")}</p>
                  </a>
                  <a onClick={() => navigate("/eventos")}>
                    <p>{t("navbar.events")}</p>
                  </a>
                  <a onClick={() => navigate("/contactos")}>
                    <p>{t("navbar.contacts")}</p>
                  </a>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      right: "20px",
                    }}
                  >
                    <img
                      onClick={() => changeLanguage("pt")}
                      src={flags.pt.svg}
                      alt="Flag"
                      style={{
                        width: "20px",
                        height: "auto",
                        marginRight: "5px",
                      }}
                    />
                    <img
                      onClick={() => changeLanguage("en")}
                      src={flags.en.svg}
                      alt="Flag"
                      style={{
                        width: "20px",
                        height: "auto",
                        marginRight: "5px",
                      }}
                    />
                  </div>
                </div>
              </header>
            </>
          ) : (
            <>
              <header className={styles.header} style={{ zIndex: 100 }}>
                <nav
                  className={styles.navigation}
                  style={{ position: "fixed" }}
                >
                  <a
                    onClick={() => navigate("/")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/NGS_logoBranco.png"
                      alt="Logo"
                      width={130}
                      height={70}
                      style={{
                        height: "auto",
                        width: "100px",
                        borderRadius: "10px",
                      }}
                    />
                  </a>
                  <div className={styles.menu}>
                    <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
                  </div>
                </nav>
              </header>
              {isMenuOpen && (
                <div className={styles.mobileMenu}>
                  <a className={styles.logoMenu} onClick={() => navigate("/")}>
                    <Image
                      src="/logoNGSpequeno.png"
                      alt="Logo"
                      width={130}
                      height={70}
                      style={{
                        height: "auto",
                        width: "100px",
                      }}
                    />
                  </a>
                  <FontAwesomeIcon
                    icon={faXmark}
                    className={styles.closeMenu}
                    onClick={toggleMenu}
                  />

                  <a onClick={() => navigate("/quemsomos")}>
                    <p>{t("navbar.whoWeAre")}</p>
                  </a>
                  <a onClick={() => navigate("/oquefazemos")}>
                    <p>{t("navbar.whatWeDo")}</p>
                  </a>
                  <a onClick={() => navigate("/publicacoes")}>
                    <p>{t("navbar.publications")}</p>
                  </a>
                  <a onClick={() => navigate("/eventos")}>
                    <p>{t("navbar.events")}</p>
                  </a>
                  <a onClick={() => navigate("/contactos")}>
                    <p>{t("navbar.contacts")}</p>
                  </a>
                  <img
                    onClick={() => changeLanguage("pt")}
                    src={flags.pt.svg}
                    alt="Flag"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: "5px",
                    }}
                  />
                  <img
                    onClick={() => changeLanguage("en")}
                    src={flags.en.svg}
                    alt="Flag"
                    style={{
                      width: "20px",
                      height: "auto",
                      marginRight: "5px",
                    }}
                  />
                </div>
              )}
            </>
          )}
        </>
      ) : null}
    </>
  );
}
