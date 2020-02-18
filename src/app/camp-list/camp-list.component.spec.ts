import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampListComponent } from './camp-list.component';

describe('CampListComponent', () => {
  let component: CampListComponent;
  let fixture: ComponentFixture<CampListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
