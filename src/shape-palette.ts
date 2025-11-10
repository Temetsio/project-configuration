import { CanvasAction } from "./shape-actions";

export interface PaletteListener {
  selectedActionChanged(event: SelectedActionChangedEvent): void;
}

export class SelectedActionChangedEvent {
  constructor(public readonly selectedAction: CanvasAction | null) {}
}

export class PaletteComponent {
  private _paletteElement: HTMLElement;
  private _actions: CanvasAction[];
  private _selectedAction: CanvasAction | null = null;
  private _listeners: PaletteListener[] = [];

  constructor(paletteElement: HTMLElement, actions: CanvasAction[]) {
    this._paletteElement = paletteElement;
    this._actions = actions;

    this.buildUI();
  }
  
  private buildUI(): void {
    this._paletteElement.innerHTML = ""; 

    this._actions.forEach((action) => {
      const button = document.createElement("button");
      button.textContent = action.name;
      button.id = action.id;
      button.classList.add("palette-button");

      if (this._selectedAction?.id === action.id) {
        button.classList.add("selected");
      }

      button.addEventListener("click", () => {
        this.selectedAction = action;
        this.updateSelectedButton();
      });

      this._paletteElement.appendChild(button);
    });
  }
  
  private updateSelectedButton(): void {
    const buttons = this._paletteElement.querySelectorAll("button");
    buttons.forEach((btn) => {
      if (this._selectedAction && btn.id === this._selectedAction.id) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    });
  }

  get selectedAction(): CanvasAction | null {
    return this._selectedAction;
  }
  
  set selectedAction(action: CanvasAction | null) {
    this._selectedAction = action;
    this.fireSelectedActionChangedEvent(
      new SelectedActionChangedEvent(this._selectedAction)
    );
  }

  addListener(listener: PaletteListener): void {
    this._listeners.push(listener);
  }

  private fireSelectedActionChangedEvent(event: SelectedActionChangedEvent): void {
    for (const listener of this._listeners) {
      listener.selectedActionChanged(event);
    }
  }
}
