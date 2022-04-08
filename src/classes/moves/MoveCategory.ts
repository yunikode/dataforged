import { Source } from "@dataforged/classes/common/Source.js";
import { Move } from "@dataforged/classes/moves/Move.js";
import type { IDisplay, ISource, MoveCategoryId, MoveCategoryName, MoveCategoryTitle, ParagraphsString } from "@dataforged/json_out/index.js";
import { badJsonError } from "@dataforged/utils/logging/badJsonError.js";
import { validateColor } from "@dataforged/utils/validateColor.js";
import type { IMoveCategoryYaml } from "@dataforged/yaml_in/moves/IMoveCategoryYaml.js";

export class MoveCategoryDisplay implements IDisplay {
  Title: MoveCategoryTitle;
  Color: string;
  constructor(title: MoveCategoryTitle, color: string) {
    this.Title = title;
    if (!validateColor(color)) {
      throw badJsonError(this.constructor,color, "Not a valid color.");
    }
    this.Color = color;
  }
}
export class MoveCategory implements IMoveCategoryYaml {
  $id: MoveCategoryId;
  Name: MoveCategoryName;
  Source: Source;
  Description: ParagraphsString;
  Moves: Move[];
  Display: MoveCategoryDisplay;
  constructor(json: IMoveCategoryYaml, ...ancestorSourceJson: ISource[]) {
    this.$id = `Moves / ${json.Name}`;
    this.Name = json.Name;
    this.Description = json.Description;
    this.Source = new Source(json.Source, ...ancestorSourceJson);
    this.Display = new MoveCategoryDisplay(`${json.Name} Moves`, json.Display.Color);
    this.Moves = json.Moves.map(move => {
      move.Category = this.$id;
      return new Move(move, this.Source, ...ancestorSourceJson);
    });
  }
}