import { CanvasAction } from './shapes-actions';
import { PaletteListener, SelectedActionChangedEvent } from './shapes-palette';

export class CanvasController implements PaletteListener {
    private _currentAction: CanvasAction | null;

    constructor(initialAction: CanvasAction | null, canvas: HTMLElement) {
        this._currentAction = initialAction;
        
        // Register click handler on canvas
        canvas.addEventListener('click', (e: MouseEvent) => {
            if (this._currentAction && 'onClick' in this._currentAction) {
                (this._currentAction as any).onClick(e);
            }
        });
    }

    selectedActionChanged(e: SelectedActionChangedEvent): void {
        this._currentAction = e.action;
    }
}
