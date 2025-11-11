const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function fetchProducts() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function createProduct(product) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return await response.json();
}

export async function updateProduct(id, product) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  return await response.json();
}

export async function deleteProduct(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
