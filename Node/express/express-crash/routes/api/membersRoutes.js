const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuidv4 = require("uuid");


// GET returns all members
router.get("/", (req, res) => {
  res.json(members);
});

// GET returns a single and specific member
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const filteredMembers = members.filter(
    (member) => member.id === parseInt(id)
  );

  filteredMembers.length > 0
    ? res.status(200).json(filteredMembers)
    : res.status(400).json({ msg: "not found :/" });
});

// POST Create Member
router.post("/", (req, res) => {
  const newMember = {
    id: uuidv4.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  members.push(newMember);

  res.status(201).json(members);
});

module.exports = router;