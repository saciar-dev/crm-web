import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliasViewComponent } from './familias-view.component';

describe('FamiliasViewComponent', () => {
  let component: FamiliasViewComponent;
  let fixture: ComponentFixture<FamiliasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamiliasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
