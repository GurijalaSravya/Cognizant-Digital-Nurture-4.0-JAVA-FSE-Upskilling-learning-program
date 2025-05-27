document.getElementById("regForm").onsubmit = function(e) {
  e.preventDefault();
  const name = e.target.name.value;
  console.log("Form submitted. Name:", name); // Log step
  // Add a breakpoint here in Chrome DevTools
  if (!name) {
    document.getElementById("msg").textContent = "Name is required";
    return;
  }
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ name }),
    headers: {"Content-Type": "application/json"}
  })
    .then(res => res.json())
    .then(data => {
      console.log("Fetch payload", data);
      document.getElementById("msg").textContent = "Registered!";
    })
    .catch(err => {
      console.error("Network error", err);
      document.getElementById("msg").textContent = "Network error";
    });
};