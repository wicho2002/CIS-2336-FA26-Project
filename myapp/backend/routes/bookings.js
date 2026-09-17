// Stage 2: Bookings API
//
// Endpoints to implement in this file:
//   GET    /api/bookings       -> return the full list of bookings
//   POST   /api/bookings       -> create a new booking, save it to bookings.json
//   DELETE /api/bookings/:id   -> remove a booking by id
//
// A booking object looks like this:
// {
//   "id": "b1",              // generate with Date.now().toString()
//   "roomId": "r1",
//   "clubName": "Chess Club",
//   "date": "2026-10-01",
//   "startTime": "14:00",
//   "endTime": "15:00",
//   "purpose": "Weekly meeting"
// }

const express = require("express");
const router = express.Router();
const { readData, writeData } = require("../utils/jsonStore");

// GET /api/bookings
router.get("/", (req, res) => {
  // TODO (Stage 2):
  // 1. Read bookings.json using readData()
  // 2. Send it back with res.json(...)

  res.status(501).json({ error: "Not implemented yet" });
});

// POST /api/bookings
router.post("/", (req, res) => {
  // TODO (Stage 2):
  // 1. Read the new booking fields from req.body
  //    (roomId, clubName, date, startTime, endTime, purpose)
  // 2. Validate that required fields are present
  //    (res.status(400).json({ error: "..." }) if something is missing)
  // 3. Read the current bookings from bookings.json
  // 4. Create a new booking object with a unique id
  // 5. Add it to the array and writeData("bookings.json", updatedArray)
  // 6. res.status(201).json(newBooking)

  res.status(501).json({ error: "Not implemented yet" });
});

// DELETE /api/bookings/:id
router.delete("/:id", (req, res) => {
  // TODO (Stage 2):
  // 1. Read the current bookings from bookings.json
  // 2. Filter out the booking whose id matches req.params.id
  // 3. If nothing was removed, res.status(404).json({ error: "Booking not found" })
  // 4. Otherwise writeData("bookings.json", filteredArray)
  // 5. res.status(200).json({ message: "Booking canceled" })

  res.status(501).json({ error: "Not implemented yet" });
});

module.exports = router;
