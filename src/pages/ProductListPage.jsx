import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts, deleteProduct } from "../api";
import ProductItem from "../components/ProductItem";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await fetchProducts();
    setProducts(data);
  }

  async function handleDelete(id) {
    await deleteProduct(id);
    loadProducts();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Produtos</h1>
        <Link
          to="/new"
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          + Adicionar Produto
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">Nenhum produto cadastrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onEdit={() => {}}
              onDelete={() => handleDelete(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
