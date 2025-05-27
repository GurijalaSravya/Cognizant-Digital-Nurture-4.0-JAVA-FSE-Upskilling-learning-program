const defaultCategory = "General";
const events = [
  { name: "Photography", date: "2025-07-01", seats: 10, category: "Art" },
  { name: "Jazz Night", date: "2025-07-05", seats: 5, category: "Music" }
];

function displayEvent({ name, date, seats, category = defaultCategory }) {
  return `${name} on ${date} (${category}) - Seats: ${seats}`;
}

const [first, ...rest] = events;
const clone = [...events];
const details = [displayEvent(first), ...rest.map(displayEvent)];

document.getElementById("eventDetails").innerHTML = details.join("<br>");