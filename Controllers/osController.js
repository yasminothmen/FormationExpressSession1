const express = require("express");
const os = require("os");
module.exports.getOSInformations = (req, res, next) => {
  try {
    const osTnformation = { hostname: os.hostname(), type: os.type() };
    if (!osTnformation) {
      throw new Error("there is no information from your os");
    }

    res.status(200).json(osTnformation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
