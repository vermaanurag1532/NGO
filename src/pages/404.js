import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-5xl font-bold mb-4 animate-bounce">404</h1>
        <p className="text-lg mb-6">
          The page you are looking for does not exist.
        </p>
        <Link href="/" legacyBehavior>
          <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Go back to Homepage
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
