const express = require("express");
const {
  getNews,
  getSingleNews,
  createNews,
  updateNews,
  deleteNews,
} = require("../controllers/newsController");

const router = express.Router();

router.get("/", getNews);
router.get("/:id", getSingleNews);
router.post("/", createNews);
router.put("/:id", updateNews);
router.delete("/:id", deleteNews);

module.exports = router;
