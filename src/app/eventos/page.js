import Image from "next/image";
import Head from "next/head";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.imageInicial2}>
          <div className={styles.quadrado}>
            <div className={styles.quadrado_texto}>
              <h1>Eventos</h1>
            </div>
          </div>
        </div>

        <div className={styles.quadradoinfo}>
          <div className={styles.quadradoImagem}>
            <img
              src={"./covid.png"}
              alt="logoPequeno"
              style={{ width: "220px", height: "auto" }}
            />
          </div>
          <div className={styles.quadradotexto}>
            <div className={styles.post}>
              <div className={styles.postinfo}>
                <h1>Evento</h1>
                <p>Publicado a dd/mm/aaaa</p>
              </div>
              <button className={styles.buttonRed}>Ver mais</button>
            </div>
            <div className={styles.conteudo}>
              <p>
                Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo
                Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo
              </p>
            </div>
          </div>
        </div>
        <div className={styles.quadradoinfoVermelho}>
          <div className={styles.quadradoImagem}>
            <img
              src={"./covid.png"}
              alt="logoPequeno"
              style={{ width: "220px", height: "auto" }}
            />
          </div>
          <div className={styles.quadradotexto}>
            <div className={styles.post}>
              <div className={styles.postinfo}>
                <h1>Evento</h1>
                <p>Publicado a dd/mm/aaaa</p>
              </div>
              <button className={styles.buttonRed2}>Ver mais</button>
            </div>
            <div className={styles.conteudo}>
              <p>
                Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo
                Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo
              </p>
            </div>
          </div>
        </div>
        <div className={styles.quadradoinfo}>
          <div className={styles.quadradoImagem}>
            <img
              src={"./covid.png"}
              alt="logoPequeno"
              style={{ width: "220px", height: "auto" }}
            />
          </div>
          <div className={styles.quadradotexto}>
            <div className={styles.post}>
              <div className={styles.postinfo}>
                <h1>Evento</h1>
                <p>Publicado a dd/mm/aaaa</p>
              </div>
              <button className={styles.buttonRed}>Ver mais</button>
            </div>
            <div className={styles.conteudo}>
              <p>
                Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo
                Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo
              </p>
            </div>
          </div>
        </div>
        <div className={styles.quadradoinfoVermelho}>
          <div className={styles.quadradoImagem}>
            <img
              src={"./covid.png"}
              alt="logoPequeno"
              style={{ width: "220px", height: "auto" }}
            />
          </div>
          <div className={styles.quadradotexto}>
            <div className={styles.post}>
              <div className={styles.postinfo}>
                <h1>Evento</h1>
                <p>Publicado a dd/mm/aaaa</p>
              </div>
              <button className={styles.buttonRed2}>Ver mais</button>
            </div>
            <div className={styles.conteudo}>
              <p>
                Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo
                Conteúdo Conteúdo Conteúdo Conteúdo Conteúdo
              </p>
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
