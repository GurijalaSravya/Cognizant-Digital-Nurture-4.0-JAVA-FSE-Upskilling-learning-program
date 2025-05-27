const eventName = "Community Meetup";
const eventDate = "2025-06-10";
let seats = 30;

function updateInfo() {
  document.getElementById('eventInfo').textContent =
    `${eventName} on ${eventDate}. Seats available: ${seats}`;
}

document.getElementById('registerBtn').onclick = function() {
  if (seats > 0) {
    seats--;
    updateInfo();
    alert("You have registered! Seats left: " + seats);
  } else {
    alert("Sorry, no seats left.");
  }
};

updateInfo();