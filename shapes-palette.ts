import { CanvasAction } from './shapes-actions';

/**
 * Event delivered when selected action changes.
 */
export class SelectedActionChangedEvent {
    constructor(public readonly action: CanvasAction | null) {}
}

/**
 * Listener interface for palette selection changes.
 */
export interface PaletteListener {
    selectedActionChanged(evt: SelectedActionChangedEvent): void;
}

/**
 * PaletteComponent builds a simple UI (buttons) for provided actions
 * and notifies registered PaletteListeners when selection changes.
 */
export class PaletteComponent {
    private _element: HTMLElement;
    private _actions: CanvasAction[];
    private _listeners: PaletteListener[] = [];
    private _selectedAction: CanvasAction | null = null;
    private _buttonsById = new Map<string, HTMLButtonElement>();

    constructor(container: HTMLElement, actions: CanvasAction[]) {
        this._element = container;
        this._actions = actions.slice();
        this._render();
    }

    get selectedAction(): CanvasAction | null {
        return this._selectedAction;
    }

    set selectedAction(action: CanvasAction | null) {
        this._selectedAction = action;
        this._updateButtonSelection();
        this.fireSelectedActionChangedEvent(new SelectedActionChangedEvent(this._selectedAction));
    }

    addListener(listener: PaletteListener): void {
        if (!this._listeners.includes(listener)) this._listeners.push(listener);
    }

    removeListener(listener: PaletteListener): void {
        this._listeners = this._listeners.filter(l => l !== listener);
    }

    private fireSelectedActionChangedEvent(evt: SelectedActionChangedEvent): void {
        for (const l of this._listeners.slice()) {
            try {
                l.selectedActionChanged(evt);
            } catch {
                // swallow listener errors to keep other listeners working
            }
        }
    }

    private _render(): void {
        // clear container
        this._element.innerHTML = '';
        const palette = document.createElement('div');
        palette.className = 'shape-palette';

        for (const action of this._actions) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'palette-button';
            btn.id = action.id;
            btn.textContent = action.name;
            btn.title = action.status;
            btn.addEventListener('click', () => {
                // set selection to clicked action
                this.selectedAction = action;
            });
            this._buttonsById.set(action.id, btn);
            palette.appendChild(btn);
        }

        this._element.appendChild(palette);
        this._updateButtonSelection();
    }

    private _updateButtonSelection(): void {
        for (const [id, btn] of this._buttonsById.entries()) {
            const isSelected = this._selectedAction != null && this._selectedAction.id === id;
            btn.classList.toggle('selected', isSelected);
            // update title to reflect current status of corresponding action
            const action = this._actions.find(a => a.id === id);
            if (action) btn.title = action.status;
        }
    }
}