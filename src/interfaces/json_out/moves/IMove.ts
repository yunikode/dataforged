import type { IHasDisplay, IHasId, IHasName, IHasSource, IHasSuggestions, IHasText } from "@dataforged/interfaces/json_out/common/IHas.js";
import type { IMoveOutcomes } from "@dataforged/interfaces/json_out/moves/IMoveOutcomes.js";
import type IMoveTriggerYaml from "@dataforged/interfaces/yaml_in/moves/IMoveTriggerYaml.js";
import type { AssetId } from "@dataforged/strings/id/AssetId.js";
import type { MoveCategoryId } from "@dataforged/strings/id/MoveCategoryId.js";
import type { MoveId } from "@dataforged/strings/id/MoveId.js";
import type { OracleTableId } from "@dataforged/strings/id/OracleTableId.js";

/**
 * Interface representing a Starforged move.
 *
 */
export interface IMove extends IHasId<MoveId>, IHasName, IHasText, IHasDisplay, IHasSource, Partial<IHasSuggestions> {
  /**
   * The ID of the parent Asset of the move, if any.
   */
  Asset?:  AssetId | undefined;
  /**
   * The ID of the move's category.
   */
  Category: MoveCategoryId;
  /**
   * Whether or not the move is a Progress Move. Progress moves roll two challenge dice against a progress score.
   */
  "Progress Move"?: boolean | undefined;
  /**
   * The ID of the move that this move is a variant of, if any.
   */
  "Variant of"?: MoveId | undefined;
  /**
   * The move's trigger data.
   */
  Trigger: IMoveTriggerYaml;
  /**
   * The IDs of any oracles *directly* referenced by the move.
   */
  Oracles?: OracleTableId[] | undefined;
  /**
   * Outcome information for the move.
   */
  Outcomes?: IMoveOutcomes | undefined;
}
