// my-bookings.js
//
// Renders the list of bookings on my-bookings.html and lets the
// user cancel a booking. Use rooms.js as your reference.

async function renderBookings() {
  const container = document.getElementById("bookings-list");

  // TODO:
  // 1. Call getBookings() from api.js
  // 2. If there are no bookings, show a friendly message
  // 3. Otherwise, build one .booking-item div per booking, each with:
  //    - room name / id, club name, date, start-end time, purpose
  //    - a "Cancel" button with a data-id attribute set to the booking id
  // 4. Set container.innerHTML to the joined HTML
  // 5. Attach click listeners to each "Cancel" button that call
  //    handleCancelClick(bookingId)

  container.innerHTML = "<p>TODO: implement renderBookings()</p>";
}

async function handleCancelClick(bookingId) {
  // TODO:
  // 1. Call deleteBooking(bookingId) from api.js
  // 2. Re-render the bookings list (call renderBookings() again)
}

document.addEventListener("DOMContentLoaded", renderBookings);
