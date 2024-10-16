import React, { useState } from "react";

export function Select({ children, onValueChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {children[0]} {/* This will be the SelectTrigger */}
      </div>
      {isOpen && (
        <SelectContent>
          {React.Children.map(children.slice(1), (child) => {
            return React.cloneElement(child, {
              onValueChange,
              closeDropdown: () => setIsOpen(false),
            }); // Pass closeDropdown
          })}
        </SelectContent>
      )}
    </div>
  );
}

export function SelectTrigger({ children }) {
  return <div className="relative">{children}</div>;
}

export function SelectContent({ children }) {
  return (
    <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg z-10">
      <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        {children}
      </ul>
    </div>
  );
}

export function SelectItem({ value, children, onValueChange, closeDropdown }) {
  return (
    <li
      className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
      onClick={() => {
        if (onValueChange) {
          onValueChange(value); // Call onValueChange to update value
          closeDropdown(); // Close dropdown after selection
        }
      }}
    >
      {children}
    </li>
  );
}

export function SelectValue({ value, placeholder }) {
  return <span className="block truncate">{value || placeholder}</span>; // Display selected value
}
