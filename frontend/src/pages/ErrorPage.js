import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "an error occurred";
  let message = "sorry";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "not found";
    message = "cant find resources";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
