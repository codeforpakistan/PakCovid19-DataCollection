import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVerifiedCasesComponent } from './non-verified-cases.component';

describe('NonVerifiedCasesComponent', () => {
  let component: NonVerifiedCasesComponent;
  let fixture: ComponentFixture<NonVerifiedCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonVerifiedCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonVerifiedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
