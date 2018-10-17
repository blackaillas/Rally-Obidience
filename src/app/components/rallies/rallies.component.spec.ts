import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RalliesComponent } from './rallies.component';

describe('RalliesComponent', () => {
  let component: RalliesComponent;
  let fixture: ComponentFixture<RalliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RalliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RalliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
