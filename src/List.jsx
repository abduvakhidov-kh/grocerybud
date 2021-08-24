import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function List({ items, removeItem, editItem }) {
  console.log(items);

  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn" type="button">
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button
                className="delete-btn"
                type="button"
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
