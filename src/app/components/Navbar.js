"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const router = useRouter();

  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const flags = {
    pt: { name: "Português", svg: "/flags/portugal.svg" },
    en: { name: "English", svg: "/flags/uk.svg" },
  };
  useEffect(() => {
    // Function to update window width when resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const handleMenuClick = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };
  return (
    <>
      <Head>
        <title>NGS | Leão e Associados {language}</title>
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
                    onClick={() => handleMenuClick("/")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/logoNGSpequeno.png"
                      alt="Logo da Clínica Veterinária"
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
                  <a onClick={() => handleMenuClick("/quemsomos")}>
                    <p>{t("navbar.whoWeAre")}</p>
                  </a>
                  <a onClick={() => handleMenuClick("/oquefazemos")}>
                    <p>{t("navbar.whatWeDo")}</p>
                  </a>
                  <a onClick={() => handleMenuClick("/publicacoes")}>
                    <p>{t("navbar.publications")}</p>
                  </a>
                  <a onClick={() => handleMenuClick("/eventos")}>
                    <p>{t("navbar.events")}</p>
                  </a>
                  <a onClick={() => handleMenuClick("/contactos")}>
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
                    href="/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/NGS_logoBranco.png"
                      alt="Logo da Clínica Veterinária"
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
                  <a className={styles.logoMenu} href="/">
                    <Image
                      src="/logoNGSpequeno.png"
                      alt="Logo da Clínica Veterinária"
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

                  <a onClick={() => handleMenuClick("/quemsomos")}>
                    <p>{t("navbar.whoWeAre")}</p>
                  </a>
                  <a onClick={() => handleMenuClick("/oquefazmos")}>
                    <p>{t("navbar.whatWeDo")}</p>
                  </a>
                  <a onClick={() => handleMenuClick("/publicacoes")}>
                    <p>{t("navbar.publications")}</p>
                  </a>
                  <a onClick={() => handleMenuClick("/eventos")}>
                    <p>{t("navbar.events")}</p>
                  </a>
                  <a onClick={() => handleMenuClick("/contactos")}>
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
