import Image from "next/image";
import Head from "next/head";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact.form";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.pagecontactos}>
          <h1>Contactos</h1>
          <div className={styles.pagecontactos_locais}>
            <div className={styles.lxSede}>
              <h1>Sede (Lisboa)</h1>
              <div className={styles.infolocalSede}>
                <p>Estrada de Benfica, 447 - 1º Dtº, 1500-080 Lisboa</p>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>Tel.</p>
                  <p>+351 21 778 85 76</p>
                </div>
                <div className={styles.letrasCoresSede}>
                  <p className={styles.red2}>Fax </p>
                  <p>+351 21 778 12 05</p>
                </div>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>Tlm. </p>
                  <p>+351 96 405 14 54 (24 horas)</p>
                </div>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>E-mail</p>
                  <p>geral.lisboa@ngsadvogados.com</p>
                </div>
              </div>
            </div>
            <div className={styles.norteSede}>
              <h1>Delegação Norte</h1>
              <div className={styles.infolocalSede}>
                <p>Largo da Porta Nova 39 - 1º, 4750-329 Barcelos</p>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>Tel. </p>
                  <p>+351 25 314 96 16</p>
                </div>
                <div className={styles.letrasCores}>
                  <p className={styles.red2}>Fax </p>
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
