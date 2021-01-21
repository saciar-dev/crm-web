import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperfamiliasViewComponent } from './superfamilias-view.component';

describe('SuperfamiliasViewComponent', () => {
  let component: SuperfamiliasViewComponent;
  let fixture: ComponentFixture<SuperfamiliasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperfamiliasViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperfamiliasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
