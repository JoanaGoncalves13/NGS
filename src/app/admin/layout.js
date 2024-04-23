"use client";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  const [hasPermission, setHasPermission] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const password = "ngs";

  useEffect(() => {
    const storedPermission = localStorage.getItem("Permission");
    const expirationTime = localStorage.getItem("PermissionExpiration");

    if (
      storedPermission === "true" &&
      expirationTime &&
      new Date().getTime() < parseInt(expirationTime, 10)
    ) {
      setHasPermission(true);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setError("");
  };

  const handleButtonClick = () => {
    if (inputValue === password) {
      setHasPermission(true);
      localStorage.setItem("Permission", "true");
      localStorage.setItem(
        "PermissionExpiration",
        String(new Date().getTime() + 3600000) // 1 hour in milliseconds
      );
      router.push("/admin");
    } else {
      setError("Palavra passe errada");
    }
  };

  return (
    <div>
      {hasPermission ? (
        children
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          <p>Acesso Admin</p>
          <input
            value={inputValue}
            onChange={handleInputChange}
            style={{ marginBottom: "10px" }}
          />
          <br />
          <button onClick={handleButtonClick}>Entrar</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
}
