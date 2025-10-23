import { PaletteListener, SelectedActionChangedEvent } from './shapes-palette';

export class StatusBar implements PaletteListener {
    private _statusElement: HTMLElement;

    constructor(element: HTMLElement) {
        this._statusElement = element;
    }

    selectedActionChanged(e: SelectedActionChangedEvent): void {
        this._statusElement.innerHTML = e.action?.status ?? '';
    }
}