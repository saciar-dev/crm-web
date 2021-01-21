import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosViewComponent } from './servicios-view.component';

describe('ServiciosViewComponent', () => {
  let component: ServiciosViewComponent;
  let fixture: ComponentFixture<ServiciosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
