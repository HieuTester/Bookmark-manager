import React from 'react';
import '../App.css'


export default ({ bookmark: { title, url, id }, onDelete }) => {
  return (
    <div className="bookmark-item">
      <h2>{title}</h2>
      <p>URL: {url}</p>
      <button type="button" onClick={() => onDelete(id)}>
        Remove
      </button>
    </div>
  );
};