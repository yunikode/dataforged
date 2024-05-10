/* eslint-disable no-restricted-imports */
export * from "@utils/index.js";
export * from "@json_out/index.js";
export * from "@yaml_in/index.js";
export * from "@classes/index.js";
export * from "@constants/index.js";
export * from "@game_objects/index.js";
export * from "@utils/index.js";
import type { Ironsworn, Starforged, SunderedIsles } from "@json_out/GameData.js";

import IS from "./json/ironsworn/datasworn.json" assert {type: "json"};
import SF from "./json/starforged/dataforged.json" assert {type: "json"};
import SI from "./json/sunderedIsles/dataforged.json" assert {type: "json"};

/**
 * @public
 */
const starforged = SF as Starforged;
/**
 * @public
 */
const sunderedIsles = SI as SunderedIsles;
/**
 * @public
 */
const ironsworn = IS as unknown as Ironsworn;

export { starforged, ironsworn,sunderedIsles };