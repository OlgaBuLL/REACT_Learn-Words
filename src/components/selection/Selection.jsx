import React from "react";

export default function SelectLanguage({ onWordSelect }) {
  function handleChange(event) {
    onWordSelect(event.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option value="english">ENG</option>
      <option value="russian">РУС</option>
    </select>
  );
}
