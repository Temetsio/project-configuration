import { PaletteListener, SelectedActionChangedEvent } from "./shape-palette";

export class StatusBar implements PaletteListener {
  private _statusElement: HTMLElement;

  constructor(statusElement: HTMLElement | null) {
    if (!statusElement) {
      throw new Error("Status element with id 'status' not found.");
    }
    this._statusElement = statusElement;
  }

  selectedActionChanged(e: SelectedActionChangedEvent): void {
    const newStatus = e.selectedAction ? e.selectedAction.status : "";
    this._statusElement.innerHTML = newStatus;
  }
}
