import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintdetailComponent } from './sprintdetail.component';

describe('SprintdetailComponent', () => {
  let component: SprintdetailComponent;
  let fixture: ComponentFixture<SprintdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
