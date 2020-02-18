import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateCampComponent } from './add-or-update-camp.component';

describe('AddOrUpdateCampComponent', () => {
  let component: AddOrUpdateCampComponent;
  let fixture: ComponentFixture<AddOrUpdateCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
