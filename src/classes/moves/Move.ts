import { SourceInheritor } from "@dataforged/classes/common/SourceInheritor.js";
import type { Suggestions } from "@dataforged/classes/common/Suggestions.js";
import { MoveOutcomes } from "@dataforged/classes/moves/MoveOutcomes.js";
import { MoveTrigger } from "@dataforged/classes/moves/MoveTrigger.js";
import type { AssetId , IDisplay , IMove , ISource, MoveCategoryId , MoveId , OracleTableId , ParagraphsString } from "@dataforged/json_out/index.js";

import { buildLog } from "@dataforged/utils/logging/buildLog.js";
import _ from "lodash-es";

/**
 * Object representing a Starforged move.
 */
export class Move extends SourceInheritor implements IMove {
  $id: MoveId;
  Name: string;
  Category: MoveCategoryId;
  Asset?: this["Category"] extends "Moves / Assets" ? AssetId : undefined;
  "Progress Move"?: boolean | undefined;
  "Variant of"?: MoveId | undefined;
  Display: IDisplay;
  Trigger: MoveTrigger;
  Text: ParagraphsString;
  Oracles?: OracleTableId[] | undefined;
  Suggestions?: Suggestions | undefined;
  Outcomes?: MoveOutcomes | undefined;
  constructor(json: IMove, ...sourceAncestors: ISource[]) {
    super(json.Source ?? {}, ...sourceAncestors);
    this.$id = json.$id ?? `${json.Category} / ${json.Name}`;
    buildLog(this.constructor, `Building: ${this.$id}`);
    this.Name = json.Name;
    this.Category = json.Category;
    if (this.Category === "Moves / Assets") {
      if (!json.Asset) {
        throw new Error("Expected an asset ID");
      }
      this.Asset = json.Asset as typeof this.Asset;
    }
    this["Progress Move"] = json["Progress Move"];
    this["Variant of"] = json["Variant of"];
    const displayStub: IDisplay = { Title: this.Name };
    if (json.Display) {
      this.Display = _.merge(displayStub, json.Display);
    } else {
      this.Display = displayStub;
    }
    this.Trigger = new MoveTrigger(json.Trigger, `${this.$id} / Trigger`);
    this.Text = json.Text;
    this.Oracles = json.Oracles;
    this.Outcomes = json.Outcomes ? new MoveOutcomes(json.Outcomes, `${this.$id} / Outcomes`) : undefined;
  }
}

