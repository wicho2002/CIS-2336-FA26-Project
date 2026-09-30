// booking.js
//
// Handles the "Book a Room" form on booking.html.
// Use rooms.js as your reference for how to fetch data and build
// HTML with template strings.

async function populateRoomSelect() {
  const select = document.getElementById("room-select");

  try {
    const rooms = await getRooms();

    select.innerHTML = '<option value="">--Select a room--</option>';
    rooms.forEach((room) => {
      const option = document.createElement("option");
      option.value = room.id;
      option.textContent = `${room.name} (capacity: ${room.capacity})`;
      select.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    select.innerHTML = '<option value="">Error loading rooms</option>';
  
  }
}

  // TODO:
  // 1. Call getRooms() from api.js
  // 2. For each room, create an <option value="ROOM_ID">ROOM_NAME</option>
  // 3. Append the options to `select`


async function handleBookingSubmit(event) {
  event.preventDefault();

  const statusEl = document.getElementById("form-status");

  const roomId = document.getElementById("room-select").value;
  const clubName = document.getElementById("club-name").value;
  const date = document.getElementById("date").value;
  const startTime = document.getElementById("start-time").value;
  const endTime = document.getElementById("end-time").value;
  const purpose = document.getElementById("purpose").value;

  const bookingData = {
    roomId,
    clubName,
    date,
    startTime,
    endTime,
    purpose
  };

  if (startTime >= endTime) {
    statusEl.className = "error";
    statusEl.textContent = "Error: Start time must be before end time.";
    return;
  }

  try {
    await createBooking(bookingData);
    statusEl.className = "success";
    statusEl.textContent = "Booking created successfully!";
    event.target.reset();
    setTimeout(() => {
      window.location.href = "my-bookings.html"; // Redirect to my-bookings.html after 2 seconds
    }, 1500);
  } catch (error) {
    statusEl.className = "error";
    statusEl.textContent = "Error creating booking.";
    console.error("Error creating booking:", error);
  }

  // TODO:
  // 1. Read the form values (roomId, clubName, date, startTime, endTime, purpose)
  //    Hint: use document.getElementById(...).value for each field
  // 2. Build a bookingData object matching the shape described in api.js
  // 3. Call createBooking(bookingData) from api.js
  // 4. On success, show a message in statusEl (add class "success")
  //    and consider resetting the form with event.target.reset()
  // 5. On failure, show an error message in statusEl (add class "error")

  
}

document.addEventListener("DOMContentLoaded", () => {
  populateRoomSelect();
  document
    .getElementById("booking-form")
    .addEventListener("submit", handleBookingSubmit);
});
