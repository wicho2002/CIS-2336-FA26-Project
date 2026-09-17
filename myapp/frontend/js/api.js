// api.js
//
// This file is the ONLY place that talks to the backend.
// rooms.js / booking.js / my-bookings.js all call the functions below -
// they never use fetch() directly. This keeps things organized and
// makes Stage 3 (integration) simple: you only edit this one file.
//
// STAGE 1 (Frontend only, no backend yet):
//   Leave this file as-is. The functions below return hardcoded
//   "mock" data so you can build and style your pages first.
//
// STAGE 3 (Integration):
//   Replace the body of each function with a real fetch() call to
//   your Express server, started with "npm start" at http://localhost:3000.
//   Examples are shown in the comments below each function.

// ---------- Mock data used only in Stage 1 ----------
const MOCK_ROOMS = [
  {
    id: "r1",
    name: "Bayou City Room",
    capacity: 12,
    equipment: ["Projector", "Whiteboard", "Conference Phone"],
    foodAllowed: true,
  },
  {
    id: "r2",
    name: "Cullen Room",
    capacity: 8,
    equipment: ["TV Screen", "Whiteboard"],
    foodAllowed: false,
  },
];

let MOCK_BOOKINGS = [];

// ---------- Rooms ----------

async function getRooms() {
  // STAGE 1 (current):
  return MOCK_ROOMS;

  // STAGE 3: replace the line above with:
  // const response = await fetch("/api/rooms");
  // return await response.json();
}

async function getRoomById(id) {
  // STAGE 1 (current):
  return MOCK_ROOMS.find((room) => room.id === id);

  // STAGE 3: replace the two lines above with:
  // const response = await fetch(`/api/rooms/${id}`);
  // return await response.json();
}

// ---------- Bookings ----------

async function getBookings() {
  // TODO (Stage 1): return MOCK_BOOKINGS
  // TODO (Stage 3): fetch("/api/bookings") and return the parsed JSON
}

async function createBooking(bookingData) {
  // bookingData looks like:
  // { roomId, clubName, date, startTime, endTime, purpose }

  // TODO (Stage 1): push a new object (with a generated id) into
  //   MOCK_BOOKINGS and return it.
  // TODO (Stage 3): fetch("/api/bookings", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(bookingData),
  // }) and return the parsed JSON.
}

async function deleteBooking(id) {
  // TODO (Stage 1): remove the matching booking from MOCK_BOOKINGS.
  // TODO (Stage 3): fetch(`/api/bookings/${id}`, { method: "DELETE" }).
}
