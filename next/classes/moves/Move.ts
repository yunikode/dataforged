import { MdString } from "../general/MdString";
import { Source, ISource } from "../general/Source";
import { ISuggestions } from "../general/Suggestions";
import { OracleTableId } from "../oracles/OracleId";
import { IMoveTrigger, MoveTrigger } from "./MoveTrigger";

export type MoveId = string;

export type MoveCategory = `${"Session" | "Adventure" | "Quest" | "Connection" | "Exploration" | "Combat" | "Suffer" | "Recover" | "Threshold" | "Legacy" | "Fate" | "Asset"} Moves`;

export class Move implements IMove {
  $id: MoveId;
  Name: string;
  Category: MoveCategory;
  "Progress Move"?: boolean | undefined;
  "Variant of"?: MoveId | undefined;
  Trigger: MoveTrigger;
  Text: MdString;
  Oracles?: OracleTableId[] | undefined;
  Source?: Source | undefined;
  Suggestions?: ISuggestions | undefined;
  constructor(json: IMove, id?: string) {
    this.$id = id ?? `${json.Category} / ${json.Name}`;
    this.Name = json.Name;
    this.Category = json.Category;
    this["Progress Move"] = json["Progress Move"];
    this["Variant of"] = json["Variant of"];
    this.Trigger = json.Trigger;
    this.Text = json.Text;
    this.Oracles = json.Oracles;
    // this.Source = json.Source ? new Source(json.Source);

  }
}

export interface IMove {
  $id?: MoveId | undefined;
  Name: string;
  Category: MoveCategory;
  "Progress Move"?: boolean | undefined;
  "Variant of"?: MoveId | undefined;
  Trigger: IMoveTrigger;
  Text: MdString;
  Oracles?: OracleTableId[] | undefined;
  Source?: ISource | undefined;
  Suggestions?: ISuggestions | undefined;
}



