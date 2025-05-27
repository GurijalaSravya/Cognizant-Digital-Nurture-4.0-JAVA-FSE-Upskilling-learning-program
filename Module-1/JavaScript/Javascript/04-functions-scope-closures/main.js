let events = [
  { name: "Music Fest", category: "Music", seats: 10 },
  { name: "Art Expo", category: "Art", seats: 5 },
];

// Closure to track registrations by category
function registrationCounter() {
  const counters = {};
  return function(category) {
    counters[category] = (counters[category] || 0) + 1;
    return counters[category];
  };
}
const countRegistration = registrationCounter();

function addEvent(name, category, seats) {
  events.push({ name, category, seats });
}

function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  if (event && event.seats > 0) {
    event.seats--;
    const total = countRegistration(event.category);
    return `Registered for ${eventName}. Total in ${event.category}: ${total}`;
  } else {
    return "Event not found or full!";
  }
}

function filterEventsByCategory(category, cb) {
  return events.filter(e => cb(e, category));
}

// UI wiring
document.getElementById('addEvent').onclick = function() {
  addEvent("Coding Bootcamp", "Tech", 20);
  document.getElementById('output').textContent = "Event added!";
};
document.getElementById('registerUser').onclick = function() {
  document.getElementById('output').textContent = registerUser("Music Fest");
};
document.getElementById('filterMusic').onclick = function() {
  const filtered = filterEventsByCategory("Music", (e, cat) => e.category === cat);
  document.getElementById('output').textContent = JSON.stringify(filtered);
};