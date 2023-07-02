import {Injectable} from '@angular/core';
import {Grid, MapTile, MapTileType} from "../model/MapTile";
import {Miner} from "../model/Miner";
import {MiningMap} from "../model/MiningMap";
import {RandomService} from "../../common/service/random.service";

@Injectable({
  providedIn: 'root'
})
export class MapCreationService {

  constructor(private randomService: RandomService) {
  }

  createSimpleMap(gridSize: number): MiningMap {
    let grid = this.createEmptyGrid(gridSize);
    let miner = new Miner(Math.floor(gridSize / 2), Math.floor(gridSize / 2))
    return new MiningMap(gridSize, grid, miner);
  }

  private createEmptyGrid(gridSize: number): Grid {
    let grid: Grid = [];
    for (let i = 0; i < gridSize; ++i) {
      for (let j = 0; j < gridSize; ++j) {
        let randomNumber = this.randomService.getRandomObjectFromArray([MapTileType.RESOURCE, MapTileType.EMPTY]);
        grid.push(new MapTile(i, j, randomNumber));
      }
    }
    return grid;
  }


}
