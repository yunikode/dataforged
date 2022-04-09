import type { IResultColumn, IRow, ITableColumnBase, OracleTableId } from "@json_out/index.js";

export class ResultColumn implements IResultColumn {
  Label: IResultColumn["Label"];
  ["Use content from"]: IResultColumn["Use content from"];
  Key: IResultColumn["Key"];
  constructor(content: OracleTableId, label: string = "Result", key: keyof IRow = "Result") {
    this.Label = label;
    this["Use content from"] = content;
    this.Key = key;
  }
}

export class RollColumn implements ITableColumnBase {
  Label: string = "Roll";
  ["Use content from"]: OracleTableId;
  constructor(content: OracleTableId, label: string = "Roll") {
    this.Label = label;
    this["Use content from"] = content;
  }
}