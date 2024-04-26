"use client";
import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import ContactForm from "./components/contact.form";
import { useRouter } from "next/navigation";

export default function Home() {
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
              <p>Portugal</p>
              <p>Espanha</p>
              <p>Suiça</p>
              <p>Brasil</p>
            </div>
          </div>
        </div>
        <div className={styles.informacoes}>
          <div className={styles.info1}>
            <div className={styles.quadradotransparente_info}>
              <h1>Conheça-nos</h1>
              <p>Somos o seu parceiro confiável.</p>
              <button className={styles.button1} onClick={QuemSomos}>
                Ver mais
              </button>
            </div>
            <div className={styles.quadradovermelho_info}>
              <h1>O que fazemos</h1>
              <p>Descubra como o podemos ajudar.</p>
              <button className={styles.button2} onClick={OqueFazemos}>
                Ver mais
              </button>
            </div>
          </div>
          <div className={styles.info1}>
            <div className={styles.quadradovermelho_info}>
              <h1>Mantenha-se a par</h1>
              <p>Consulte o nosso blog para atualizações.</p>
              <button className={styles.button2} onClick={Blog}>
                Blog
              </button>
            </div>
            <div className={styles.quadradotransparente_info}>
              <h1>Eventos</h1>
              <p>Participe nos nossos eventos.</p>
              <button className={styles.button1} onClick={Eventos}>
                Ver mais
              </button>
            </div>
          </div>
        </div>
        <ContactForm />
      </main>

      <footer className={styles.footer}>
        <div className={styles.localizacoes}>
          <div className={styles.lx}>
            <h1>Sede (Lisboa)</h1>
            <div className={styles.infolocal}>
              <p>Estrada de Benfica, 447 - 1º Dtº, 1500-080 Lisboa</p>
              <div className={styles.letrasCores}>
                <p className={styles.red}>Tel.</p>
                <p>+351 21 778 85 76</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>Fax </p>
                <p>+351 21 778 12 05</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>Tlm. </p>
                <p>+351 96 405 14 54 (24 horas)</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>E-mail</p>
                <p>geral.lisboa@ngsadvogados.com</p>
              </div>
            </div>
          </div>
          <div className={styles.norte}>
            <h1>Delegação Norte</h1>
            <div className={styles.infolocal}>
              <p>Largo da Porta Nova 39 - 1º, 4750-329 Barcelos</p>
              <div className={styles.letrasCores}>
                <p className={styles.red}>Tel. </p>
                <p>+351 25 314 96 16</p>
              </div>
              <div className={styles.letrasCores}>
                <p className={styles.red}>Fax </p>
                <p>+351 25 314 96 18</p>
              </div>

              <div className={styles.letrasCores}>
                <p className={styles.red}>E-mail</p>
                <p>geral.barcelos@ngsadvogados.com</p>
              </div>
            </div>
          </div>
        </div>
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
