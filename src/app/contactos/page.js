import Image from "next/image";
import Head from "next/head";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NGS | Leão e Associados</title>
        <meta
          name="description"
          content="NGS Leão e Associados, Sociedade de Advogados, SP, RL."
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerImagem}>
          <img
            src={"./logoNGSpequeno.png"}
            alt="logoPequeno"
            style={{ width: "100px", height: "auto" }}
          />
        </div>
        <div className={styles.headerTexto}>
          <a href="quemSomos">
            <p>Quem somos</p>
          </a>
          <a href="oQueFazemos">
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
      </header>

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
        <div className={styles.contactos}>
          <div className={styles.mapa}></div>
          <div className={styles.contactos_texto}>
            <h1>Contacte-nos</h1>
            <form>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Nome "
              />

              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Telefone"
              />

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email "
              />

              <textarea
                id="message"
                name="message"
                required
                placeholder="Descreva-nos o seu problema"
              ></textarea>

              <h2>Áreas de interesse</h2>

              <label label for="civil">
                <input type="checkbox" name="interest" value="civil" /> Direito
                Civil
              </label>
              <label>
                <input type="checkbox" name="interest" value="criminal" />{" "}
                Direito Criminal
              </label>
              <label>
                <input type="checkbox" name="interest" value="tax" /> Direito
                Fiscal
              </label>
              <label>
                <input type="checkbox" name="interest" value="commercial" />{" "}
                Direito Comercial
              </label>
              <button>Submeter</button>
            </form>
          </div>
        </div>
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
