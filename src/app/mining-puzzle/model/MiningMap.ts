import {Miner} from "./Miner";
import {Grid, MapTile, MapTileType} from "./MapTile";

export class MiningMap {
  gridSize: number;
  grid: Grid;
  miner: Miner;

  constructor(gridSize: number, grid: Grid, miner: Miner) {
    this.gridSize = gridSize;
    this.grid = grid;
    this.miner = miner;
  }

  moveMinerTo(newX: number, newY: number) {
    let mapTileAtIndex = this.getMapTileAtIndex(newX, newY);
    if (mapTileAtIndex && mapTileAtIndex.type != MapTileType.INACCESSIBLE) {
      this.miner.indexX = newX;
      this.miner.indexY = newY;
    }
  }

  mineBlock(){
    console.log("mining")
    let minerMapTile = this.getMapTileAtIndex(this.miner.indexX, this.miner.indexY);
    if(minerMapTile && minerMapTile?.type == MapTileType.RESOURCE){
      // TODO store resource
      minerMapTile.type = MapTileType.EMPTY;
    }
  }

  private getMapTileAtIndex(indexX: number, indexY: number): MapTile | undefined {
    // TODO optimize the function to an indexed grid.
    return this.grid.find((value) => value.indexX == indexX && value.indexY == indexY);
  }

  mine() {

  }
}
