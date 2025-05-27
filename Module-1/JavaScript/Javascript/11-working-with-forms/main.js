document.getElementById("regForm").onsubmit = function(e) {
  e.preventDefault();
  const { name, email, event } = e.target.elements;
  let error = "";
  if (!name.value.trim()) error += "Name required. ";
  if (!email.value.includes("@")) error += "Valid email required. ";
  if (!event.value) error += "Select an event. ";
  document.getElementById("formError").textContent = error;
  if (!error) {
    alert(`Registered ${name.value} for ${event.value}!`);
    e.target.reset();
  }
};