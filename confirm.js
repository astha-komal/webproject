let params = new URLSearchParams(window.location.search);

let name = params.get("name");
let age = params.get("age");
let seats = params.get("seats");
let total = params.get("total");

document.getElementById("details").innerHTML =
    "Name: " + name + "<br>" +
    "Age: " + age + "<br>" +
    "Seats: " + seats + "<br>" +
    "Total: ₹" + total;