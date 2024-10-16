function Error({ statusCode }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : "An error occurred on the client"}
      </h1>
      <p>Please try refreshing the page or come back later.</p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
