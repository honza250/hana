const express = require("express");
const router = express.Router();

// Middleware pro formuláře
router.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("index", { title: "Domů" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "O službě" });
});

router.get("/pricing", (req, res) => {
  res.render("pricing", { title: "Ceník" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Kontakt" });
});

module.exports = router;
