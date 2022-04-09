import type { AttributeKey, GameObjectType } from "@dataforged/json_out/index.js";
import type { AttributeHash } from "@dataforged/utils/types/AttributeHash.js";

/**
 */
export type IGameObjectRecordBase<T extends GameObjectType, K extends AttributeKey> = {
  "Object type": T;
  "Inherit rolls"?: boolean | undefined;
} & AttributeHash<K>;


