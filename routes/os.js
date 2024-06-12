var express = require("express");
var router = express.Router();
const os = require("os");
/* GET home page. */
router.get("/", (req, res, next) => {
  try {
    const osTnformation = { hostname: os.hostname(), type: os.type() };
    if (!osTnformation) {
      throw new Error("there is no information from your os");
    }

    res.status(200).json(osTnformation);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
