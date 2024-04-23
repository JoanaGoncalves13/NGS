"use client";

import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "black" }}>
      <h1>Página Admin</h1>
      <button onClick={() => router.push("/admin/contactos")}>Contactos</button>
      <button onClick={() => router.push("/admin/newsletter")}>
        Newsletter
      </button>
      <button onClick={() => router.push("/admin/posts")}>Blog</button>
      <button onClick={() => router.push("/admin/eventos")}>Eventos</button>
    </div>
  );
};

export default AdminPage;
