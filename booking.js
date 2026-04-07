let bookings = JSON.parse(localStorage.getItem("bookings"));

let container = document.querySelector(".bookings-container");

if (!bookings || bookings.length === 0) {
    container.innerHTML = "<h2>No Bookings Yet</h2>";
} else {

    bookings.forEach(function(b) {

        let card = document.createElement("div");
        card.className = "booking-card";

        card.innerHTML = `
            <h3>${b.bus}</h3>
            <p><b>Route:</b> ${b.from} → ${b.to}</p>
            <p><b>Date:</b> ${b.date}</p>
            <p><b>Seats:</b> ${b.seats.join(", ")}</p>
            <p><b>Total Price:</b> ₹${b.total}</p>
            <p class="status confirmed">Confirmed</p>
        `;

        container.appendChild(card);
    });
}