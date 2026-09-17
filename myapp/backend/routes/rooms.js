// Stage 2: Rooms API
//
// Endpoints to implement in this file:
//   GET  /api/rooms       -> return the full list of rooms
//   GET  /api/rooms/:id   -> return a single room by id (404 if not found)
//
// The GET /api/rooms route is done for you as a worked example.
// Your job: implement GET /api/rooms/:id using the same pattern.

const express = require("express");
const router = express.Router();
const { readData } = require("../utils/jsonStore");

// GET /api/rooms  (already implemented - study this pattern)
router.get("/", (req, res) => {
  const rooms = readData("rooms.json");
  res.json(rooms);
});

// GET /api/rooms/:id
router.get("/:id", (req, res) => {
  // TODO (Stage 2):
  // 1. Read rooms.json using readData()
  // 2. Find the room whose "id" matches req.params.id
  // 3. If found, res.json(room)
  // 4. If not found, res.status(404).json({ error: "Room not found" })

  res.status(501).json({ error: "Not implemented yet" });
});

module.exports = router;
