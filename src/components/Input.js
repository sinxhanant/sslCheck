import React from 'react';

function Input({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Enter domain (e.g., example.com)"
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
