import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsSortComponent } from './tutorials-sort.component';

describe('TutorialsSortComponent', () => {
  let component: TutorialsSortComponent;
  let fixture: ComponentFixture<TutorialsSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutorialsSortComponent]
    });
    fixture = TestBed.createComponent(TutorialsSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
