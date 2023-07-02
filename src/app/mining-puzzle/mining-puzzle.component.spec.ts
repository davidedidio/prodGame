import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MiningPuzzleComponent} from './mining-puzzle.component';

describe('MiningPuzzleComponent', () => {
  let component: MiningPuzzleComponent;
  let fixture: ComponentFixture<MiningPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiningPuzzleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MiningPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
