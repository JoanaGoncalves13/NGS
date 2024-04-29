"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("pt"); // New state to track the current language

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
  }, []); // Empty dependency array to run effect only once on component mount
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
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
                    href="/"
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
                  <a href="quemsomos">
                    <p>Quem somos</p>
                  </a>
                  <a href="oquefazemos">
                    <p>O que fazemos</p>
                  </a>
                  <a href="publicacoes">
                    <p>Publicações</p>
                  </a>
                  <a href="eventos">
                    <p>Eventos</p>
                  </a>
                  <a href="contactos">
                    <p>Contactos</p>
                  </a>
                  <div onClick={() => changeLanguage("pt")}>
                    <img
                      src={flags.pt.svg}
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
              <header className={styles.header}>
                <nav className={styles.navigation}>
                  <a
                    href="/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/logoNGSpequeno.png"
                      alt="Logo da Clínica Veterinária"
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

                  <a href="quemsomos">
                    <p>Quem somos</p>
                  </a>
                  <a href="oquefazemos">
                    <p>O que fazemos</p>
                  </a>
                  <a href="publicacoes">
                    <p>Publicações</p>
                  </a>
                  <a href="eventos">
                    <p>Eventos</p>
                  </a>
                  <a href="contactos">
                    <p>Contactos</p>
                  </a>
                </div>
              )}
            </>
          )}
        </>
      ) : null}
    </>
  );
}
