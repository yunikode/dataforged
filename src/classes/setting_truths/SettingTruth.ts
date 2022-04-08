import { Source } from "@dataforged/classes/common/Source.js";
import { Suggestions } from "@dataforged/classes/common/Suggestions.js";
import { SettingTruthOption } from "@dataforged/classes/setting_truths/SettingTruthOption.js";
import type { ISettingTruth, ISource, ParagraphsString, SettingTruthId, SettingTruthName } from "@dataforged/json_out/index.js";
import { buildLog } from "@dataforged/utils/logging/buildLog.js";
import type { ISettingTruthYaml } from "@dataforged/yaml_in/setting_truths/ISettingTruthYaml.js";

export class SettingTruth implements ISettingTruth {
  $id: SettingTruthId;
  Name: SettingTruthName;
  Table: SettingTruthOption[];
  Character: ParagraphsString;
  Suggestions?: Suggestions | undefined;
  Source: Source;
  constructor(json: ISettingTruthYaml, sourceJson: ISource) {
    this.$id = `Setting Truths / ${json.Name}`;
    buildLog(this.constructor,`Building: ${this.$id}`);
    this.Name = json.Name;
    this.Table = json.Table.map(row => new SettingTruthOption(this.$id, row));
    this.Character = json.Character;
    this.Suggestions = json.Suggestions ? new Suggestions(json.Suggestions) : undefined;
    this.Source = new Source(json.Source ?? {}, sourceJson);
  }
}