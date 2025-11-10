
export interface Shape {
    id?: string;
    type: string;
    x?: number;
    y?: number;
    [key: string]: any;
}

export interface ShapeClass {
    type?: string;
    initWithXY(x: number, y: number): Shape;
    new (...args: any[]): Shape;
}

export interface ShapeViewer {
    getShapes(): Shape[];
    addShape(shape: Shape): Shape;
    removeShapeById(id: string): boolean;
    getShapeById(id: string): Shape | undefined;
    selectShapeById(id: string | null): void;
    deselectAll(): void;
}

export interface CanvasAction {
    readonly name: string;
    readonly status: string;
    id: string;

    execute(...args: any[]): void | Promise<void>;
    undo?(): void | Promise<void>;
    onClick?(e: MouseEvent): void;
}

export abstract class BaseAction implements CanvasAction {
    protected shapeViewer: ShapeViewer;
    protected _status: string = 'ready';

    constructor(shapeViewer: ShapeViewer) {
        this.shapeViewer = shapeViewer;
    }

    abstract get name(): string;
    get status(): string {
        return this._status;
    }

    get id(): string {
        return this.name.toLowerCase().split(' ').join('-');
    }

    execute(..._args: any[]): void | Promise<void> {
        
    }

   
    undo(): void | Promise<void> {
        
    }
}

export class SelectAction extends BaseAction {
    constructor(shapeViewer: ShapeViewer) {
        super(shapeViewer);
        this._status = 'ready';
    }

    get name(): string {
        return 'Select';
    }

    get status(): string {
        return this._status;
    }

    execute(id?: string | null): void {
        if (!id) {
            this.shapeViewer.deselectAll();
            this._status = 'ready';
            return;
        }
        const shape = this.shapeViewer.getShapeById(id);
        if (shape) {
            this.shapeViewer.selectShapeById(id);
            this._status = 'active';
        } else {
            this._status = 'ready';
        }
    }

    undo(): void {
        this.shapeViewer.deselectAll();
        this._status = 'ready';
    }
}

export class AddShapeAction extends BaseAction {
    private _shapeClass: ShapeClass;
    private addedShapeId?: string;

    constructor(shapeViewer: ShapeViewer, shapeClass: ShapeClass) {
        super(shapeViewer);
        this._shapeClass = shapeClass;
        this._status = 'ready';
    }

    get name(): string {
        return `Add ${this._shapeClass.type ?? 'Shape'}`;
    }

    get status(): string {
        return this._status;
    }

    execute(...args: any[]): void {
        if (args[0] instanceof MouseEvent) {
            this.onClick?.(args[0]);
        } else {
            const shape = this._shapeClass.initWithXY(0, 0);
            const added = this.shapeViewer.addShape(shape);
            this.addedShapeId = added.id ?? this.addedShapeId;
            this._status = 'done';
        }
    }

    onClick(e: MouseEvent): void {
        console.log(`AddShapeAction: creating shape at ${e.offsetX}, ${e.offsetY}`);
        const shape = this._shapeClass.initWithXY(e.offsetX, e.offsetY);
        const added = this.shapeViewer.addShape(shape);
        this.addedShapeId = added.id ?? this.addedShapeId;
        this._status = 'done';
    }

    undo(): void {
        if (this.addedShapeId) {
            this.shapeViewer.removeShapeById(this.addedShapeId);
            this._status = 'ready';
        }
    }
}

export class Rectangle implements Shape {
    id?: string;
    type = 'Rectangle';
    constructor(public x: number, public y: number, public width: number, public height: number) {}

    static initWithXY(x: number, y: number): Shape {
        return new Rectangle(x, y, 100, 60);
    }
}

export class Circle implements Shape {
    id?: string;
    type = 'Circle';
    constructor(public x: number, public y: number, public r: number) {}

    static initWithXY(x: number, y: number): Shape {
        return new Circle(x, y, 30);
    }
}

export class Triangle implements Shape {
    id?: string;
    type = 'Triangle';
    constructor(public x: number, public y: number, public base: number = 60, public height: number = 60) {}

    static initWithXY(x: number, y: number): Shape {
        return new Triangle(x, y);
    }
}
