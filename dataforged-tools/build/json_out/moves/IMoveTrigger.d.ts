import type { MoveId } from "../index.js";
import type { IHasId, IHasText } from "../meta/IHas.js";
import type { IMoveTriggerOption } from "./IMoveTriggerOption.js";
import type { RollType } from "./RollMethod.js";
/**
 * @public
 */
export declare type MoveTriggerId = `${MoveId}/Trigger`;
/**
 * Describes the trigger conditions of the move.
 * @public
 */
export interface IMoveTrigger extends IHasId<MoveTriggerId>, IHasText {
    /**
     * @example `Moves/Adventure/Face_Danger/Trigger`
     */
    $id: MoveTriggerId;
    /**
     * A markdown string containing the primary trigger text for this move.
     * @example `Moves/Adventure/Face_Danger/Trigger.Text`: "When you attempt something risky or react to an imminent threat..."
     */
    Text: string;
    /**
     * Information on any action rolls or progress rolls that are made when this move is triggered (which may describe a specific subset of the primary trigger in their own `Text` property).
     *
     * If there's no action rolls or progress rolls attached to this move, this is `undefined`.
     */
    "Options"?: IMoveTriggerOption<RollType>[] | undefined;
}
//# sourceMappingURL=IMoveTrigger.d.ts.map