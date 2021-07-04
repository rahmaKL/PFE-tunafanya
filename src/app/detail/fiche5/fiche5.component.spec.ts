import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche5Component } from './fiche5.component';

describe('Fiche5Component', () => {
  let component: Fiche5Component;
  let fixture: ComponentFixture<Fiche5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fiche5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiche5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
