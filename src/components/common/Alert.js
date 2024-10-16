// components/ui/alert.js
const Alert = ({ variant, children }) => {
  const alertClasses =
    variant === "destructive"
      ? "bg-red-100 border-red-500 text-red-700"
      : "bg-green-100 border-green-500 text-green-700";

  return (
    <div className={`border-l-4 ${alertClasses} p-4 mb-4`} role="alert">
      {children}
    </div>
  );
};

const AlertTitle = ({ children }) => {
  return <h4 className="font-bold">{children}</h4>;
};

const AlertDescription = ({ children }) => {
  return <p>{children}</p>;
};

export { Alert, AlertTitle, AlertDescription };
