const monthNamesPT = {
  "01": "Jan",
  "02": "Fev",
  "03": "Mar",
  "04": "Abr",
  "05": "Mai",
  "06": "Jun",
  "07": "Jul",
  "08": "Ago",
  "09": "Set",
  10: "Out",
  11: "Nov",
  12: "Dez",
};

export function formatDate(timestamp) {
  // Convert Firestore timestamp object to JavaScript Date object
  const jsDate = timestamp.toDate();

  // Format the date according to the "Jan 22, 2024" format
  const date = jsDate.toLocaleDateString("pt-PT", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [dia, mes, ano] = date.split("/");

  return `${dia} ${monthNamesPT[mes]}, ${ano}`;
}
