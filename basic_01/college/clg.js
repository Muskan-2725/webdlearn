document.addEventListener("DOMContentLoaded", function () {
    loadEvents();
    setupRegistration();
    setupLogin();
    setupFeedback();
});

// ==========================
// 1️⃣ EVENT MANAGEMENT - Load Events in List & Dropdown
// ==========================
function loadEvents() {
    const eventList = document.getElementById("event-list");
    const eventDropdown = document.getElementById("event");

    const events = [
        { id: 1, name: "Tech Fest" },
        { id: 2, name: "Cultural Fest" },
        { id: 3, name: "Hackathon" },
        { id: 4, name: "Sports Meet" },
        { id: 5, name: "Music Night" }
    ];

    // Clear previous content
    eventList.innerHTML = "";
    eventDropdown.innerHTML = "<option value=''>Select an Event</option>";

    events.forEach(event => {
        // Add to event list (displaying on page)
        let li = document.createElement("li");
        li.textContent = event.name;
        eventList.appendChild(li);

        // Add to dropdown list
        let option = document.createElement("option");
        option.value = event.id;
        option.textContent = event.name;
        eventDropdown.appendChild(option);
    });
}

// ==========================
// 2️⃣ EVENT REGISTRATION - Handles Form Submission
// ==========================
function setupRegistration() {
    document.getElementById("registrationForm").addEventListener("submit", function (e) {
        e.preventDefault();
        
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let event = document.getElementById("event").value;
        let eventText = document.getElementById("event").selectedOptions[0].text; // Get event name

        if (!name || !email || !event) {
            alert("Please fill all fields!");
            return;
        }

        alert(`✅ Registration Successful!\n📌 Name: ${name}\n📧 Email: ${email}\n🎉 Event: ${eventText}`);
        this.reset();
    });
}

// ==========================
// 3️⃣ LOGIN & AUTHENTICATION - Simple Login System
// ==========================
function setupLogin() {
    document.getElementById("loginForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        if (username === "admin" && password === "admin123") {
            alert("Login Successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid Credentials!");
        }
    });
}

// ==========================
// 4️⃣ FEEDBACK SYSTEM - Handle Feedback Submission
// ==========================
function setupFeedback() {
    document.getElementById("feedbackForm")?.addEventListener("submit", function (e) {
        e.preventDefault();

        let feedback = document.getElementById("feedback").value;
        if (!feedback.trim()) {
            alert("Please provide feedback!");
            return;
        }

        alert("Thank you for your feedback!");
        this.reset();
    });
}

// ==========================
// 5️⃣ NOTIFICATIONS & ALERTS - Display Temporary Notifications
// ==========================
function showNotification(message) {
    let notificationArea = document.getElementById("notifications");
    let notification = document.createElement("div");
    
    notification.className = "notification";
    notification.textContent = message;

    notificationArea.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
}
