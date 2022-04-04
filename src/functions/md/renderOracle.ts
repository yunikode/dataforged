import _ from "lodash-es";
import extractColumnData from "./extractColumnData.js";
import renderTable from "./renderTable.js";
import type Oracle from "../../types/oracles/classes/Oracle.js";
import buildLog from "../logging/buildLog.js";
/**
 * It takes an oracle and returns a markdown string.
 * @param {Oracle} oracle - Oracle, headerLevel = 3
 * @param [headerLevel=3] - The header level to use for the title.
 * @returns A string containing the markdown for the oracle.
 */
export default function renderOracle(oracle: Oracle, headerLevel = 3) {
  if (oracle.Display["Column of"]) {
    return "";
  }
  buildLog(renderOracle, `Generating markdown for ${oracle.Display.Title}...`);
  const header = _.repeat("#", headerLevel) + " " + (oracle.Display.Title);
  const items = [header];
  if (oracle.Description) {
    items.push(oracle.Description);
  }
  const tableData = extractColumnData(oracle);
  const table = renderTable(tableData);
  items.push(table);
  return items.join("\n\n");
}
