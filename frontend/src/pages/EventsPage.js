import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "could not fetch events" };
    return json(
      {
        message: "could not fetch events",
      },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};
