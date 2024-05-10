/* eslint-disable no-restricted-imports */
export * from "./utils/index.js";
export * from "./json_out/index.js";
export * from "./yaml_in/index.js";
export * from "./classes/index.js";
export * from "./constants/index.js";
export * from "./game_objects/index.js";
export * from "./utils/index.js";
import IS from "./json/ironsworn/datasworn.json" assert { type: "json" };
import SF from "./json/starforged/dataforged.json" assert { type: "json" };
import SI from "./json/sunderedIsles/dataforged.json" assert { type: "json" };
/**
 * @public
 */
const starforged = SF;
/**
 * @public
 */
const sunderedIsles = SI;
/**
 * @public
 */
const ironsworn = IS;
export { starforged, ironsworn, sunderedIsles };
//# sourceMappingURL=index.js.map