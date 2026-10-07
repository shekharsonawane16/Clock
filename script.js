const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    }

    hours = hours.toString().padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;

    date.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

// Initial update
updateClock();

// Update every second
setInterval(updateClock, 1000);
