import type { Starforged, Ironsworn, SunderedIsles } from "./types/index.js";

const starforged = require("./starforged/dataforged.json") as Starforged;
const ironsworn = require("./ironsworn/datasworn.json") as Ironsworn;
const sunderedIsles = require("./sunderedIsles/dataforged.json") as SunderedIsles

module.exports = {starforged, ironsworn, sunderedIsles};