function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}
Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const myEvent = new Event("Photography Walk", "2025-06-09", 12);

const eventKeys = Object.entries(myEvent)
  .map(([key, val]) => `${key}: ${val}`)
  .join(", ");

document.getElementById('eventOutput').textContent =
  `${eventKeys}. Available? ${myEvent.checkAvailability()}`;