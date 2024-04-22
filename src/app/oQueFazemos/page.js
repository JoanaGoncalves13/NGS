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
        <div className={styles.imageInicial2}>
          <div className={styles.quadrado}>
            <div className={styles.quadrado_texto}>
              <h1>Áreas de prática</h1>
            </div>
          </div>
        </div>

        <div className={styles.servicos}>
          <div className={styles.servicos_texto}>
            <p>
              A NGS presta serviços de patrocínio, assessoria e consultoria
              jurídica nas diversas áreas do Direito, integrando, como clientes,
              tanto pessoas singulares como colectivas, bem como outras
              entidades de natureza pública.
            </p>
            <p>
              Na área das empresas e sociedades comerciais, tratamos de
              constituições, alterações do contrato de sociedade, transmissões
              de acções e de quotas, exclusões e exonerações de sócios,
              dissoluções, insolvências e reclamações de créditos,
              reestruturações, recuperações e revitalizações (PER’s) de empresas
              e, mais recentemente, elaboração de projectos de investimentos e
              apresentação de candidaturas a fundos no âmbito do Quadro de
              Apoios Portugal 2020.
            </p>
            <button>Contacte-nos</button>
          </div>
          <div className={styles.sociedade_imagem}></div>
        </div>

        <div className={styles.areas}>
          <div className={styles.areas_imagem}></div>

          <div className={styles.areas_texto}>
            <p>
              No que se refere aos chamados Direitos Humanos, poderemos, entre
              outras, acompanhar questões sobre livre circulação e residência
              dos cidadãos da União Europeia em Portugal, sobre Liberdade
              Religiosa, sobre aquisição e perda da Nacionalidade Portuguesa,
              sobre a Protecção de Dados Pessoais e sobre direito de Asilo.
            </p>
            <p>
              Na área do contencioso e pré-contencioso do trabalho, acompanhamos
              e instruímos processos disciplinares e patrocinamos acções de
              impugnação de despedimentos.
            </p>
            <p>
              Na área do contencioso em geral, patrocinamos os clientes em
              acções da mais variada índole, seja qual for a natureza do
              interesse, privado ou público, que se discuta.
            </p>
            <p>
              Na área dos contratos, seja qual for a sua índole ou natureza,
              elaboramos minutas e criamos condições para a sua assinatura, seja
              qual for o seu objecto e a posição que o nosso cliente tenha
              neles.
            </p>
          </div>
        </div>
        <h1 className={styles.hono_title}>Honorários</h1>
        <div className={styles.honorarios}>
          <div className={styles.honorarios_texto}>
            <p>
              Nas nossas Notas de Honorários, procuramos reflectir o equilíbrio
              entre a importância dos serviços que prestamos, a complexidade dos
              assuntos que tratamos e a criatividade posta na sua resolução. Por
              conta dos honorários, que serão apurados a final, poderão ser
              solicitadas quantias, a título de provisão ou adiantamentos.
            </p>
            <p>
              No que se refere a serviços notariais, estes são prestados ao
              abrigo do disposto no art.º 38º do DL n.º 76-A/2006, de 29 de
              Março, e, bem assim, do disposto no art.º 27º do DL n.º 26/2004,
              de 4 de Fevereiro, sendo facturados nos termos da Tabela do
              Regulamento Emolumentar dos Registos e Notariado (DL n.º
              322-A/2001, de 14 de Dezembro).
            </p>
          </div>
          <div className={styles.honorarios_imagem}></div>
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
