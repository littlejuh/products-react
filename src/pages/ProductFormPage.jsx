import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, updateProduct, fetchProducts } from "../api";

export default function ProductFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    image_url: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchProducts().then((data) => {
        const product = data.find((p) => p.id === parseInt(id));
        if (product) setFormData(product);
      });
    }
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      await updateProduct(id, formData);
    } else {
      await createProduct(formData);
    }
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        {id ? "Editar Produto" : "Novo Produto"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 w-full max-w-md"
      >
        <input
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <input
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <input
          name="quantity"
          placeholder="Quantidade"
          value={formData.quantity}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <input
          name="image_url"
          placeholder="URL da Imagem"
          value={formData.image_url}
          onChange={handleChange}
          className="border rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Voltar
        </button>
      </form>
    </div>
  );
}
