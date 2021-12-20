const express = require("express");
const { login, dashboard } = require("../controllers/main");
const authenticationMiddleware = require("../middleware/auth");

const router = express.Router();

router.route("/login").post(login);
router.route("/dashboard").post(authenticationMiddleware, dashboard);

module.exports = router;
