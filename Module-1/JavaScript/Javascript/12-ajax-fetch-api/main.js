const endpoint = "https://jsonplaceholder.typicode.com/posts"; // Mock API

document.getElementById("regForm").onsubmit = function(e) {
  e.preventDefault();
  document.getElementById("msg").textContent = "Submitting...";
  setTimeout(() => {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(() => document.getElementById("msg").textContent = "Success!")
      .catch(() => document.getElementById("msg").textContent = "Submission failed");
  }, 1500);
};