
import type IAttributeChoices from "../../gameObjects/IAttributeChoices.js";
import Requirements from "../../general/Requirements.js";
import Suggestions from "../../general/Suggestions.js";
import type IOracleUsage from "../interfaces/IOracleUsage.js";
import type IOracleUsageYaml from "../interfaces/yaml/IOracleUsageYaml.js";

export default class OracleUsage implements IOracleUsage {
  Initial?: boolean | undefined;
  "Min rolls"?: number | undefined;
  "Max rolls"?: number | undefined;
  Repeatable?: boolean | undefined;
  Suggestions?: Suggestions | undefined;
  Requires?: Requirements | undefined;
  "Allow duplicates"?: boolean | undefined;
  "Sets attributes"?: IAttributeChoices[] | undefined;
  constructor(json: IOracleUsageYaml) {
    // if (!is<IOracleUsageData>(json)) {
    //   throw new Error();
    // }
    this.Initial = json.Initial;
    this["Max rolls"] = json["Max rolls"];
    this["Min rolls"] = json["Min rolls"];
    this.Repeatable = json.Repeatable;
    this["Allow duplicates"] = json["Allow duplicates"] ?? false;
    if (json.Suggestions) {
      this.Suggestions = new Suggestions(json.Suggestions);
    }
    if (json.Requires) {
      this.Requires = new Requirements(json.Requires);
    }
    // this["Sets attributes"] = json["Sets attributes"];
  }
}
