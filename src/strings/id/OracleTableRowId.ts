import type { OracleTableId } from "@dataforged/strings/id/OracleTableId.js";

type OracleTableRowId = `${OracleTableId} / ${RollRange}`;
export { OracleTableRowId };

export type RollRange = number | `${number}-${number}`;
