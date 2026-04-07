let params = new URLSearchParams(window.location.search);

let seats = params.get("seats");
let total = params.get("total");

window.onload = function(){

    let info = document.createElement("h3");
    info.innerText = "Seats: " + seats + " | Total: ₹" + total;

    document.querySelector(".main").prepend(info);
};

/*function submitForm(){
    alert("Booking Successful! 🎉");
    return false;
}*/
// Get data from previous page


function goToConfirm() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (!name || !age) {
        alert("Please fill all details");
        return false;
    }

    // ✅ pass ALL data to next page
    window.location.href =
        `confirm.html?name=${name}&age=${age}&seats=${seats}&total=${total}`;

    return false;
}