const Custom500 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-5xl font-bold mb-4">500</h1>
        <p className="text-lg mb-6">Oops! Something went wrong on our end.</p>
        <p className="text-lg mb-6">Please try again later.</p>
        {/* <Link href="/" legacyBehavior>
          <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
            Go back to Homepage
          </a>
        </Link> */}
      </div>
    </div>
  );
};

export default Custom500;
