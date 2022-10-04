const express = require("express");
const contact = require("../controllres/contact.controller");
const router = express.Router();
router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteFavourite);
router.rouer("/favorite")
.get(contacts.findAllFavourite);
router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.deleteFavourite);
module.exports = router;