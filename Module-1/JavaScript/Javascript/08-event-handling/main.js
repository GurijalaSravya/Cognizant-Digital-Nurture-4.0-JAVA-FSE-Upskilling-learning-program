let events = [
  { name: "Guitar Night", category: "music" },
  { name: "JS Bootcamp", category: "tech" }
];

function render(list) {
  const container = document.getElementById("eventList");
  container.innerHTML = "";
  list.forEach(event => {
    const card = document.createElement('div');
    card.textContent = event.name;
    const btn = document.createElement('button');
    btn.textContent = "Register";
    btn.onclick = () => alert("Registered for " + event.name);
    card.appendChild(btn);
    container.appendChild(card);
  });
}

document.getElementById("categoryFilter").onchange = function(e) {
  const cat = e.target.value;
  render(cat ? events.filter(ev => ev.category === cat) : events);
};

document.getElementById("searchInput").onkeydown = function(e) {
  const value = e.target.value + (e.key.length === 1 ? e.key : "");
  render(events.filter(ev => ev.name.toLowerCase().includes(value.toLowerCase())));
};

render(events);