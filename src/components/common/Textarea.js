// components/ui/textarea.js
const Textarea = ({
  id,
  name,
  rows,
  placeholder,
  value,
  onChange,
  className,
  required,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
      required={required}
    />
  );
};

export { Textarea };
