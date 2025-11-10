export interface CanvasAction {
  readonly name: string;
  readonly status: string;
  readonly id: string;
}

export class ShapeViewer {
  }

export abstract class BaseAction implements CanvasAction {
  protected shapeViewer: ShapeViewer;

  constructor(protected _name: string, protected _status: string, shapeViewer: ShapeViewer) {
    this.shapeViewer = shapeViewer;
  }
  get name(): string {
    return this._name;
  }
  get status(): string {
    return this._status;
  }

  get id(): string {
    return this.name.toLowerCase().split(' ').join('-');
  }

  abstract execute(): void;
}

export class SelectAction extends BaseAction {
  constructor(shapeViewer: ShapeViewer) {
    super("Select Action", "ready", shapeViewer);
  }

  execute(): void {
    console.log(`Executing ${this.name}`);
  }
}
export class AddShapeAction extends BaseAction {
  constructor(shapeViewer: ShapeViewer) {
    super("Add Shape Action", "ready", shapeViewer);
  }

  execute(): void {
    console.log(`Executing ${this.name}`);
  }
}
