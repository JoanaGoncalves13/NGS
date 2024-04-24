"use client";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase";

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
    <div style={{ backgroundColor: "black" }}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
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
