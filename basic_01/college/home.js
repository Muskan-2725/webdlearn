document.addEventListener("DOMContentLoaded", function () {
    const events = [
        { id: 1, name: "Tech Fest", date: "April 10, 2025" },
        { id: 2, name: "Cultural Night", date: "May 15, 2025" },
        { id: 3, name: "Sports Meet", date: "June 5, 2025" }
    ];

    const eventList = document.getElementById("event-list");
    const eventDropdown = document.getElementById("event");

    // Load events into event list and dropdown
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p>`;
        eventList.appendChild(eventCard);

        const option = document.createElement("option");
        option.value = event.name;
        option.textContent = event.name;
        eventDropdown.appendChild(option);
    });

    // Handle form submission
    document.getElementById("registrationForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const eventSelected = document.getElementById("event").value;

        if (name && email && eventSelected) {
            alert(`Registration Successful!\nName: ${name}\nEmail: ${email}\nEvent: ${eventSelected}`);
            this.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
