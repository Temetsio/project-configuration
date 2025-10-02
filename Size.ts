export class Size {
  private _width: number;
  private _height: number;

  public constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  public get width(): number {
    return this._width;
  }

  public get height(): number {
    return this._height;
  }
}
