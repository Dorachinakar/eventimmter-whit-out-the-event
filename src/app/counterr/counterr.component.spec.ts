import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterrComponent } from './counterr.component';

describe('CounterrComponent', () => {
  let component: CounterrComponent;
  let fixture: ComponentFixture<CounterrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
