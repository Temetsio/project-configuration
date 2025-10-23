import { PaletteComponent } from './shapes-palette';
import { SelectAction, AddShapeAction } from './shapes-actions';
import { StatusBar } from './shapes-status';
// ...existing code...

export class ShapesEditor {
    private _shapeView: any;
    private _palette: PaletteComponent;
    private _statusBar: StatusBar;

    constructor() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
        if (!canvas) throw new Error('Canvas element with id="canvas" not found');

        // Initialize shape viewer
        const Global: any = window as any;
        const ShapeViewerCtor = Global.ShapeViewer ?? _FallbackShapeViewer;
        this._shapeView = new ShapeViewerCtor(canvas);

        // Prepare shape factories
        const Rectangle = Global.Rectangle ?? _Rectangle;
        const Circle = Global.Circle ?? _Circle;
        const Triangle = Global.Triangle ?? _Triangle;

        // Initialize palette
        this._palette = new PaletteComponent(
            document.getElementById('palette') as HTMLElement,
            [
                new SelectAction(this._shapeView),
                new AddShapeAction(this._shapeView, Rectangle),
                new AddShapeAction(this._shapeView, Circle),
                new AddShapeAction(this._shapeView, Triangle),
            ]
        );

        // Initialize and connect status bar
        this._statusBar = new StatusBar(document.getElementById('status') as HTMLElement);
        this._palette.addListener(this._statusBar);
    }
}

/**
 * Minimal fallback ShapeViewer implementation used only if a real
 * ShapeViewer class is not available in the project/runtime.
 * It implements the methods expected by the actions and palette.
 */
class _FallbackShapeViewer {
    private canvas: HTMLCanvasElement;
    private shapes: any[] = [];
    private selectedId: string | null = null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
    }

    getShapes() { return this.shapes.slice(); }
    addShape(shape: any) {
        if (!shape.id) shape.id = `s${Date.now()}${Math.floor(Math.random()*1000)}`;
        this.shapes.push(shape);
        return shape;
    }
    removeShapeById(id: string) {
        const before = this.shapes.length;
        this.shapes = this.shapes.filter(s => s.id !== id);
        if (this.selectedId === id) this.selectedId = null;
        return this.shapes.length !== before;
    }
    getShapeById(id: string) { return this.shapes.find(s => s.id === id); }
    selectShapeById(id: string | null) { this.selectedId = id; }
    deselectAll() { this.selectedId = null; }
}

/**
 * Simple placeholder shapes used for AddShapeAction if no real shape
 * classes/factories are present in the project yet.
 */
const _Rectangle = { type: 'rectangle', width: 100, height: 60 };
const _Circle = { type: 'circle', r: 30 };
const _Triangle = { type: 'triangle' };

/**
 * ShapeEditor - wires a canvas ShapeViewer and a PaletteComponent together.
 * Initializes:
 *  - this._shapeView  (instance providing shape operations)
 *  - this._palette     (UI palette with actions)
 */
export class ShapeEditor {
    private _shapeView: any;
    private _palette: PaletteComponent;

    constructor() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
        if (!canvas) throw new Error('Canvas element with id="canvas" not found');

        // Prefer a real ShapeViewer constructor if available on window or module scope,
        // otherwise use the fallback implementation above.
        const Global: any = window as any;
        const ShapeViewerCtor = Global.ShapeViewer ?? _FallbackShapeViewer;
        this._shapeView = new ShapeViewerCtor(canvas);

        // Prepare shape factories / prototypes - use global if present otherwise placeholders
        const Rectangle = Global.Rectangle ?? _Rectangle;
        const Circle = Global.Circle ?? _Circle;
        const Triangle = Global.Triangle ?? _Triangle;

        // Create palette with actions. Order of AddShapeAction arguments follows
        // the project's AddShapeAction constructor (shapeViewer, shape).
        this._palette = new PaletteComponent(
            document.getElementById('palette') as HTMLElement,
            [
                new SelectAction(this._shapeView),
                new AddShapeAction(this._shapeView, Rectangle),
                new AddShapeAction(this._shapeView, Circle),
                new AddShapeAction(this._shapeView, Triangle),
            ]
        );
    }
}