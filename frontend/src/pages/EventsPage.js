import { Link } from "react-router-dom";

const EVENTS = [
  { id: "a", title: "a", image: "a", date: "a", description: "a" },
  { id: "b", title: "b", image: "b", date: "b", description: "b" },
  { id: "c", title: "c", image: "c", date: "c", description: "c" },
  { id: "d", title: "d", image: "d", date: "d", description: "d" },
  { id: "e", title: "e", image: "e", date: "e", description: "e" },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
