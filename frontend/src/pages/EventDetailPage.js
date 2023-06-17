import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p>Yes</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>hea</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    return json({ message: "couldnt fetch details" }, { status: 500 });
  } else {
    const data = await response.json();
    return data.event;
  }
};

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

export const loader = async ({ request, params }) => {
  return defer({
    event: await loadEvent(params.id),
    events: loadEvents(),
  });
};

export const action = async ({ request, params }) => {
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "not delete", status: 500 });
  }

  return redirect("/events");
};
