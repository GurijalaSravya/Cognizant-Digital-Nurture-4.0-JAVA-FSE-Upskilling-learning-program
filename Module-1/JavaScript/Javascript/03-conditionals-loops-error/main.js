const today = "2025-05-27";
const events = [
  { name: "Past Event", date: "2025-05-01", seats: 0 },
  { name: "Music Night", date: "2025-06-05", seats: 5 },
  { name: "Art Workshop", date: "2025-06-01", seats: 0 },
  { name: "Future Event", date: "2025-07-01", seats: 10 },
];

function isUpcoming(event) {
  return event.date > today && event.seats > 0;
}

function renderEvents() {
  const list = document.getElementById('eventList');
  list.innerHTML = "";
  events.forEach(event => {
    if (isUpcoming(event)) {
      const li = document.createElement('li');
      li.textContent = `${event.name} (${event.date}) - Seats: ${event.seats}`;
      list.appendChild(li);
    }
  });
}

document.getElementById('registerBtn').onclick = function() {
  try {
    const event = events.find(isUpcoming);
    if (!event) throw new Error("No available events!");
    if (event.seats <= 0) throw new Error("Event is full!");
    event.seats--;
    alert(`Registered for ${event.name}`);
    renderEvents();
  } catch (err) {
    alert("Registration error: " + err.message);
  }
};

renderEvents();