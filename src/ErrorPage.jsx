import React from 'react'
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
const ErrorPage = () => {
const error = useRouteError();

  let title = "Something went wrong";
  let message = "Please try again later.";

  if (isRouteErrorResponse(error)) {
    // thrown Response objects
    if (error.status === 401) {
      title = "Unauthorised";
      message = "Please log in to continue.";
    } else if (error.status === 403) {
      title = "Forbidden";
      message = "You don't have permission to view this page.";
    } else if (error.status === 404) {
      title = "Not found";
      message = "That page doesn't exist.";
    } else {
      title = `Error ${error.status}`;
      message = error.data || error.statusText;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>{title}</h2>
      <p>{message}</p>
      <Link to="/login" className='bg-blue-600 text-white p-1  rounded-lg font-semibold '>Go to login</Link>
    </div>
  );
}

export default ErrorPage