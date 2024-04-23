import styles from "../page.module.css";
const ContactForm = () => {
  async function sendEmails(formData) {
    const formDataParams = new URLSearchParams(formData);

    try {
      const url = `http://localhost:3030/ngs2?${formDataParams.toString()}`;

      const response = await fetch(url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
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
            <input type="checkbox" name="interest" value="criminal" /> Direito
            Criminal
          </label>
          <label>
            <input type="checkbox" name="interest" value="tax" /> Direito Fiscal
          </label>
          <label>
            <input type="checkbox" name="interest" value="commercial" /> Direito
            Comercial
          </label>
          <button>Submeter</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
