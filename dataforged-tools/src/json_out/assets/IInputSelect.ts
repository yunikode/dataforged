
import type { IInputSelectOption } from "@json_out/assets/IInputSelectOption.js";
import type { IHasId, IInput, InputType } from "@json_out/index.js";
/**
 * An input where the user selects a single option from a list of pre-set options.
 * Suggested rendering: a drop-down selection menu.
 * @typeParam K - The name(s) of the key(s) set by this item's options.
 * @typeParam V - The type(s) of the value(s) set by this item's options.
 * @example
 * ```
 * {
    "Name": "Material",
    "Input Type": "Select",
    "Attributes": [
      { "Key": "Stat", "Type": "Stat" },
      { "Key": "Condition Meter", "Type": "Condition Meter" }
    ],
    "Options": [
      {
        "Name": "Thunderwood",
        "Sets": [
          { "Key": "Stat", "Value": "Edge" },
          { "Key": "Condition Meter", "Value": "Health" }
        ]
      }
    ]
  }
 * ```
 * @public
 */
export interface IInputSelect<K extends string, V extends InputSelectOptionType> extends IInput<InputType.Select> {
  /**
   * Hints which attribute(s) set by this dropdown's options.
   */
  Sets: IInputSelectAttributeDefinition<K, V>[];
  Options: IInputSelectOption<K, V>[];
}

/**
 * Provides hints for the keys and typing of an {@link IInputSelect}'s child {@link IInputSelectOption}s.
 * @typeParam K - The name(s) of the key(s) set by this item's options.
 * @typeParam V - The type(s) of the value(s) set by this item's options.
 * @public
 */
export interface IInputSelectAttributeDefinition<K extends string, V extends InputSelectOptionType> extends IHasId<string> {
  Key: K;
  Type: V;
}

/**
 * The type of an attribute set by a Select Input.
 * @public
 */
export enum InputSelectOptionType {
  /**
   * A reference to one of the player character's stats: Edge, Heart, Iron, Shadow, or Wits.
   * @see {@link Stat}
   */
  Stat = "Stat",
  /**
   * A reference to one of the player character's condition meters: Health, Spirit, or Supply.
   * @see {@link ConditionMeterName}
   */
  ConditionMeter = "Condition Meter",
  /**
   * An arbitrary pre-set string value.
   */
  String = "String",
  /**
   * A arbitrary pre-set number value.
   */
  Number = "Number"
}

