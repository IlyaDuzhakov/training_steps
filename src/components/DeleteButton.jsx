import React from 'react';

const DeleteButton = ({ onClick }) => {
  return (
    <button className="btn-delete" title="Удалить" onClick={onClick}>
      ❌
    </button>
  );
};

export default DeleteButton;
