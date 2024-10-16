import React from "react";

export function Checkbox({ id, checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked} // Bind checked state
      onChange={onCheckedChange} // Call the change handler
      className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
    />
  );
}
