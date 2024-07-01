import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <h1>opps something went wrong</h1>
      <div>
        <h1>
          {error.status}:{error.statusText}
        </h1>
      </div>
    </div>
  );
};
export default Error;
