import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-red-600 text-3xl font-bold">No page available in this route. </h1>
      <p className="font-medium">Please back to the <Link to="/" className="text-blue-700 underline">Home route</Link></p>
    </div>
  );
};

export default ErrorPage;
