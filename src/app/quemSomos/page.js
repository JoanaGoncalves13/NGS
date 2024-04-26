"use client";
import Image from "next/image";
import Head from "next/head";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";
import ContactForm from "../components/contact.form";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const Contacto = () => {
    router.push("/contactos");
  };
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.imageInicial2}>
          <div className={styles.quadrado}>
            <div className={styles.quadrado_texto}>
              <h1>A Sociedade</h1>
            </div>
          </div>
        </div>

        <div className={styles.sociedade}>
          <div className={styles.sociedade_imagem}></div>
          <div className={styles.sociedade_texto}>
            <p>
              Somos uma sociedade de advogados em que a juventude se entrelaça
              com a maturidade. Podemos, assim, aliar a energia com que
              abraçamos os assuntos que nos são confiados, à sensatez e
              ponderação com que os tratamos.
            </p>
            <p>
              Distinguimo-nos por, em cada momento, sabermos dar ao cliente
              aquilo que ele precisa. Pode, por isso, dizer-se que praticamos
              uma advocacia feita à medida do cliente.
            </p>
            <button onClick={Contacto}>Contacte-nos</button>
          </div>
        </div>

        <div className={styles.sociedade}>
          <div className={styles.sociedade_texto}>
            <p>
              Abordamos os assuntos que nos são confiados, com dedicação e
              empenho, com o profundo conhecimento da matéria que temos sobre as
              várias áreas do Direito.
            </p>
            <p>
              Aceitamos patrocinar assuntos da mais variada natureza, em todas
              as áreas do Direito. Procuramos dar satisfação integral aos
              interesses que nos são confiados, com elevados padrões éticos, de
              qualidade e eficiência.
              <br />
              Esperamos poder ser-lhe útil.
            </p>
            <button onClick={Contacto}>Contacte-nos</button>
          </div>
          <div className={styles.sociedade_imagem}></div>
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
