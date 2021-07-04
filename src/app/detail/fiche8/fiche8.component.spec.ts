import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fiche8Component } from './fiche8.component';

describe('Fiche8Component', () => {
  let component: Fiche8Component;
  let fixture: ComponentFixture<Fiche8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fiche8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fiche8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
