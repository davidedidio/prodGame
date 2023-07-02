import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgramingInterfaceComponent} from './programing-interface.component';

describe('ProgramingInterfaceComponent', () => {
  let component: ProgramingInterfaceComponent;
  let fixture: ComponentFixture<ProgramingInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramingInterfaceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProgramingInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
