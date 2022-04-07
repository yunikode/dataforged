import type IAttributeChoices from "@dataforged/interfaces/json_out/common/IAttributeChoices.js";

/**
 * Data describing an item's requirements.
 *
 */
export default interface IRequirements {
  /**
   * A list of attribute keys, and values of those keys that satisfy the requirements.
   */
  Attributes: IAttributeChoices[];
}

