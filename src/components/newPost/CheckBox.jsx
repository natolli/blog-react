import React from "react";

const CheckBox = ({ item, handleChange, name, ...defaultProps }) => {
  return (
    <div className="checkboxContainer">
      <input
        className="check"
        type="checkbox"
        checked={item}
        onChange={handleChange}
        name={name}
        {...defaultProps}
      />
      <label class="check-label">{name}</label>
    </div>
  );
};
export default CheckBox;
