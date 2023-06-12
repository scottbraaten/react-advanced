import { json, useLoaderData, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  console.log(data);
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
};

export default EventDetailPage;

export const loader = async ({ request, params }) => {
  const response = await fetch("http://localhost:8080/events/" + params.id);

  if (!response.ok) {
    return json({ message: "couldnt fetch details" }, { status: 500 });
  } else {
    return response;
  }
};
