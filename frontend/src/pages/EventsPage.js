import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p>HEY</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadEvents = async () => {
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
    const data = await response.json();
    return data.events;
  }
};

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};
