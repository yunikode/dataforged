import jsonpath from "jsonpath";
import _ from "lodash-es";

/**
 * Replace all instances of `searchValue` in all strings in the given JSON object with `replaceValue`
 * @param json - The JSON object to be searched and replaced.
 * @param searchValue - The string to search for.
 * @param replaceValue - The value to replace.
 * @returns The original JSON object with all strings replaced.
 */
export function replaceInAllStrings<T>(json: T, searchValue: string, replaceValue: string): T {
  const jsonClone = _.cloneDeep(json);
  jsonpath.apply(jsonClone, "$..*", (result) => {
    if (typeof result === "string" && result.includes(searchValue)) {
      const text = result;
      return text.replaceAll(searchValue, replaceValue);
    }
    return result as T;
  });
  return jsonClone;
}
