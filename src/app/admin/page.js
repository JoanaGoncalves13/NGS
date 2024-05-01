"use client";

import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import Image from "next/image";

const AdminPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.headerAdmin}>
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

        <a onClick={() => router.push("/")}>
          <button className={styles.button}>Site</button>
        </a>
      </div>
      <div className={styles.adminContainer}>
        <div className={styles.adminMenu}>
          <h1 className={styles.tittitleAdminle}>Página de Controlo</h1>
          <div className={styles.adminButton}>
            <button
              className={styles.buttonAdmin}
              onClick={() => router.push("/admin/newsletter")}
            >
              Newsletter
            </button>
            <button
              className={styles.buttonAdmin}
              onClick={() => router.push("/admin/posts")}
            >
              Blog
            </button>
            <button
              className={styles.buttonAdmin}
              onClick={() => router.push("/admin/eventos")}
            >
              Eventos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
