import Image from "next/image";
import Head from "next/head";
import styles from "../page.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.publicacoes}>
          <h1>Publicações</h1>
          <div className={styles.subscricoes}>
            <div className={styles.subscricoes_subs}>
              <div className={styles.subscricoes_texto}>
                <h1>Subscreva a nossa Newsletter</h1>
                <p>
                  E fique a par das nossas publicações acerca das suas áreas de
                  interesse.
                </p>
              </div>
              <div className={styles.subscricoes_info}>
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
                </form>
              </div>
            </div>
            <div className={styles.subscricoes_areas}>
              <h1>Áreas interesses</h1>
              <form>
                <label>
                  <input type="checkbox" name="civilLaw" />
                  Direito Civil
                </label>
                <br />
                <label>
                  <input type="checkbox" name="criminalLaw" />
                  Direito Criminal
                </label>
                <br />
                <label>
                  <input type="checkbox" name="taxLaw" />
                  Direito Fiscal
                </label>
                <br />
                <label>
                  <input type="checkbox" name="commercialLaw" />
                  Direito Comercial
                </label>
                <br />
                <button type="submit">Submeter</button>
              </form>
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
                <h1>Post</h1>
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
                <h1>Post</h1>
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
                <h1>Post</h1>
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
                <h1>Post</h1>
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
