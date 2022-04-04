

import type ISettingTruth from "./ISettingTruth.js";
import type ISettingTruthTableRow from "./ISettingTruthTableRow.js";
import SettingTruthTableRow from "./SettingTruthTableRow.js";
import buildLog from "../../functions/logging/buildLog.js";
import type { IHasId } from "../general/Id.js";
import type ISource from "../general/interfaces/ISource.js";
import type MdString from "../general/MdString.js";
import Source from "../general/Source.js";
import Suggestions from "../general/Suggestions.js";

export type SettingTruthName = string;
export type SettingTruthId = `Setting Truths / ${SettingTruthName}`;

export default class SettingTruth implements Omit<ISettingTruth, "Suggestions">, IHasId {
  $id: SettingTruthId;
  Name: SettingTruthName;
  Table: ISettingTruthTableRow[];
  Character: MdString;
  Suggestions?: Suggestions | undefined;
  Source: Source;
  constructor(json: ISettingTruth, sourceJson: ISource) {
    this.$id = `Setting Truths / ${json.Name}`;
    buildLog(this.constructor, `Building: ${this.$id}`);
    this.Name = json.Name;
    // console.info(`table data:`, json.Table);
    this.Table = json.Table.map(row => new SettingTruthTableRow(this.$id, row));
    this.Character = json.Character;
    this.Suggestions = json.Suggestions ? new Suggestions(json.Suggestions) : undefined;
    this.Source = new Source(json.Source, sourceJson);
  }
}