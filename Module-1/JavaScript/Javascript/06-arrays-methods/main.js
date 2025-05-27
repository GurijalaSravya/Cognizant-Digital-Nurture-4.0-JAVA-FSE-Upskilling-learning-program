const events = [
  { name: "Music Night", type: "music" },
  { name: "Baking Workshop", type: "workshop" },
  { name: "Art Class", type: "art" }
];

// Add new event
events.push({ name: "Piano Concert", type: "music" });

// Filter music events
const musicEvents = events.filter(e => e.type === "music");

// Format event cards
const cards = events.map(e => `Event: ${e.name}`);

document.getElementById('events').innerHTML = `
  <h3>All Events:</h3>
  <ul>${cards.map(c => `<li>${c}</li>`).join("")}</ul>
  <h3>Music Events:</h3>
  <ul>${musicEvents.map(e => `<li>${e.name}</li>`).join("")}</ul>
`;