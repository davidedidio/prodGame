export class MapTile {
  indexX: number;
  indexY: number;
  type: MapTileType;

  constructor(indexX: number, indexY: number, type?: MapTileType) {
    this.indexX = indexX;
    this.indexY = indexY;
    this.type = type ?? MapTileType.EMPTY;
  }
}

export enum MapTileType {
  EMPTY, INACCESSIBLE, RESOURCE
}

export type Grid = Array<MapTile>;

