import _ from "lodash";
import Requirements from "../general/Requirements";
import { GameObjectType } from "./IGameObjectBase";
import GameObjectData from "./GameObjectData";
import badJsonError from "../../utilities/buildError";
import { is } from "typescript-is";
import IGameObject from "./IGameObject";
import IRequirementsData from "../general/interfaces/IRequirementsData";
import AttributeHash from "./AttributeHash";

export default class GameObject implements IGameObject {
  "Object type": GameObjectType;
  Requires?: Requirements | undefined;
  "Inherit rolls"?: boolean | undefined;
  constructor(json: GameObjectData) {
    if (!is<GameObjectType>(json["Object type"])) {
      badJsonError(this, json, "Invalid object type");
    }
    this["Object type"] = json["Object type"];
    // this["Inherit rolls"] = json["Inherit rolls"] ?? false;
    let requiredAttributes = _.omit(json, ["Object type", "Inherit rolls"]) as AttributeHash;
    if (Object.keys(requiredAttributes).length) {
      let requirements = { Attributes: requiredAttributes } as IRequirementsData;
      this.Requires = new Requirements(requirements);
    }
  }
}