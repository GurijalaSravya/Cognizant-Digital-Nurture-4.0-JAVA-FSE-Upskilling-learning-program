const events = [
  { name: "Yoga Session", seats: 10 },
  { name: "Painting Class", seats: 8 }
];

function render() {
  const container = document.querySelector("#eventContainer");
  container.innerHTML = "";
  events.forEach((event, idx) => {
    const card = document.createElement('div');
    card.textContent = `${event.name} - Seats: ${event.seats}`;
    const btn = document.createElement('button');
    btn.textContent = "Register";
    btn.onclick = function() {
      if (event.seats > 0) {
        event.seats--;
        render();
      }
    };
    card.appendChild(btn);
    container.appendChild(card);
  });
}

render();