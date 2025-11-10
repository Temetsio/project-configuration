import { CanvasAction } from "./shape-actions";
import { PaletteListener, SelectedActionChangedEvent } from "./shape-palette";


export class CanvasController implements PaletteListener {
  private _currentAction: CanvasAction;

  constructor(initialAction: CanvasAction, canvas: HTMLElement) {
    this._currentAction = initialAction;

    canvas.addEventListener("click", (e) => {
      if (typeof (this._currentAction as any).onClick === "function") {
        (this._currentAction as any).onClick(e);
      } else {
        console.warn(
          `Current action '${this._currentAction.name}' does not implement onClick().`
        );
      }
    });
  }

  selectedActionChanged(e: SelectedActionChangedEvent): void {
    if (e.selectedAction) {
      this._currentAction = e.selectedAction;
    }
  }
}
