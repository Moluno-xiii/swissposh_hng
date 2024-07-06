import { Link } from "react-router-dom";

function ErrorElement() {
  return (
    <div className="text-primary flex items-center justify-center text-4xl">
      Page Not Found go back{" "}
      <span className="text-indigo-500 underline">
        <Link to="/">home</Link>
      </span>
    </div>
  );
}

export default ErrorElement;
