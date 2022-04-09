import type { IDisplay } from "@json_out/index.js";

export class EncounterDisplay implements IDisplay {
  Title: string;
  constructor(json: Partial<IDisplay>, parentName: string) {
    this.Title = json.Title ?? parentName;
  }
}