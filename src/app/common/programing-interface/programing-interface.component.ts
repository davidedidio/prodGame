import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray,} from '@angular/cdk/drag-drop';
import {Moves} from "../../mining-puzzle/model/Moves";

@Component({
  selector: 'app-programing-interface',
  templateUrl: './programing-interface.component.html',
  styleUrls: ['./programing-interface.component.css'],
})
export class ProgramingInterfaceComponent implements OnInit {

  allowedActions = [Moves.LEFT, Moves.RIGHT, Moves.UP, Moves.DOWN, Moves.MINE]

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX - The Rise of Skywalker',
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(this.allowedActions, event.previousIndex, event.currentIndex);
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}

