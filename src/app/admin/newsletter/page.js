"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";
import styles from "../../page.module.css";
import Image from "next/image";

const Newsletter = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      const subscribersCollection = collection(db, "subscricoes"); // Assuming 'subscricoes' is the name of your collection
      const snapshot = await getDocs(subscribersCollection);
      const subscriberList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSubscribers(subscriberList);
    };

    fetchSubscribers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerPost}>
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
        <a href="/admin">
          <button className={styles.button}>Voltar</button>
        </a>
      </div>
      <h1 className={styles.espaco}>Newsletter</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telemóvel</th>
            <th>Direito Civil</th>
            <th>Direito Criminal</th>
            <th>Direito Fiscal</th>
            <th>Direito Comercial</th>
          </tr>
        </thead>
        <tbody>
          {subscribers.map((subscriber) => (
            <tr key={subscriber.id}>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>{subscriber.phone}</td>
              <td>
                {subscriber.interests.includes("Direito Civil") ? "Sim" : "Não"}
              </td>
              <td>
                {subscriber.interests.includes("Direito Criminal")
                  ? "Sim"
                  : "Não"}
              </td>
              <td>
                {subscriber.interests.includes("Direito Fiscal")
                  ? "Sim"
                  : "Não"}
              </td>
              <td>
                {subscriber.interests.includes("Direito Comercial")
                  ? "Sim"
                  : "Não"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Newsletter;
