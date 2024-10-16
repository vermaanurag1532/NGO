// components/ui/card.js
const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return <div className="border-b pb-4 mb-2">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-semibold text-gray-800">{children}</h2>;
};

const CardDescription = ({ children }) => {
  return <p className="text-gray-600">{children}</p>;
};

const CardContent = ({ children }) => {
  return <div>{children}</div>;
};
const CardFooter = ({ className, children }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
