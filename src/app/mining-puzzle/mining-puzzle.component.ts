import {AfterViewInit, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MapCreationService} from "./services/map-creation.service";
import {KEYS_TO_MOVES_DICT, Moves} from "./model/Moves";
import {MiningMap} from "./model/MiningMap";
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-mining-puzzle',
  templateUrl: './mining-puzzle.component.html',
  styleUrls: ['./mining-puzzle.component.css'],
})
export class MiningPuzzleComponent implements OnInit, AfterViewInit {

  @ViewChild('mySvg')
  mySvg: any;

  readonly gridInnerSquaresSize = 25;
  readonly gridSize = 29;
  miningMap?: MiningMap;

  constructor(private gridCreationServiceService: MapCreationService) {
  }

  ngOnInit(): void {
    this.miningMap = this.gridCreationServiceService.createSimpleMap(this.gridSize);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.miningMap) {
      return;
    }
    console.log(event.key);
    let move = KEYS_TO_MOVES_DICT[event.key];
    switch (move) {
      case Moves.DOWN:
        this.miningMap.moveMinerTo(this.miningMap.miner.indexX, this.miningMap.miner.indexY + 1);
        break;
      case Moves.RIGHT:
        this.miningMap.moveMinerTo(this.miningMap.miner.indexX + 1, this.miningMap.miner.indexY);
        break;
      case Moves.LEFT:
        this.miningMap.moveMinerTo(this.miningMap.miner.indexX - 1, this.miningMap.miner.indexY);
        break;
      case Moves.UP:
        this.miningMap.moveMinerTo(this.miningMap.miner.indexX, this.miningMap.miner.indexY - 1);
        break;
      case Moves.MINE:
        this.miningMap.mineBlock();
        break;
      case Moves.RESET:
        break;
      default:
        break;
    }
  }


  ngAfterViewInit(): void {
  }
}


