const express = require("express");
const { getAllUser } = require("../controller/user-controller");
const router = express.Router();;


router.get("/",getAllUser)

module.exports = router;