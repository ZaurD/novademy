import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedVideoComponent } from './locked-video.component';

describe('LockedVideoComponent', () => {
  let component: LockedVideoComponent;
  let fixture: ComponentFixture<LockedVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
