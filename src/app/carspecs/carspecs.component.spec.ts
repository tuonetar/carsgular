import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarspecsComponent } from './carspecs.component';

describe('CarspecsComponent', () => {
  let component: CarspecsComponent;
  let fixture: ComponentFixture<CarspecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarspecsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarspecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
