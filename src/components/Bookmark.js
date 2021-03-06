import React from 'react';
import '../App.css'


export default ({ bookmark: { title, url, _id }, onDelete }) => {
  return (
    <div className="bookmark-item">
      <h2>{title}</h2>
      <p>URL: {url}</p>
      <button type="button" >
        Edit
      </button>
      <button type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
  );
};