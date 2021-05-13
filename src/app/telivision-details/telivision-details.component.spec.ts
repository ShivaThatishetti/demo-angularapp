import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelivisionDetailsComponent } from './telivision-details.component';

describe('TelivisionDetailsComponent', () => {
  let component: TelivisionDetailsComponent;
  let fixture: ComponentFixture<TelivisionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelivisionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelivisionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
