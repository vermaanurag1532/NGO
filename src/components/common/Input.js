// components/ui/input.js
const Input = ({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
  className,
  required,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
      required={required}
    />
  );
};

export { Input };
