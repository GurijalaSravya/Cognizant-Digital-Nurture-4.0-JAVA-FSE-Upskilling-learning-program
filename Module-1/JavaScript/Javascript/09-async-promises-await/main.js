const endpoint = "https://mocki.io/v1/7c8e6b1d-6a13-4c0c-ae85-ecf8c4b5b9d3"; // Use your own mock JSON endpoint

function showEvents(events) {
  const list = document.getElementById("eventList");
  list.innerHTML = "";
  events.forEach(e => {
    const li = document.createElement("li");
    li.textContent = e.name;
    list.appendChild(li);
  });
}

function fetchEvents() {
  document.getElementById("spinner").style.display = "block";
  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      showEvents(data.events || []);
    })
    .catch(err => alert("Fetch failed"))
    .finally(() => document.getElementById("spinner").style.display = "none");
}

async function fetchEventsAsync() {
  document.getElementById("spinner").style.display = "block";
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    showEvents(data.events || []);
  } catch {
    alert("Async fetch failed");
  } finally {
    document.getElementById("spinner").style.display = "none";
  }
}

document.getElementById("reloadBtn").onclick = fetchEventsAsync;
fetchEvents();