import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem({ product, onDelete }) {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col items-center">
      <img
        src={product.image_url || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">Preço: R$ {product.price}</p>
      <p className="text-gray-600">Qtd: {product.quantity}</p>
      <div className="flex gap-2 mt-4">
        <Link
          to={`/edit/${product.id}`}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Editar
        </Link>
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
