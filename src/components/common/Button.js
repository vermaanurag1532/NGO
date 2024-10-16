// components/ui/button.js
const Button = ({ type, onClick, className, disabled, variant, children }) => {
  const baseClasses = "transition-all duration-200 rounded-lg px-4 py-2";
  const variantClasses =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
      : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
