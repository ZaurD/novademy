import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCoverImageComponent } from './site-cover-image.component';

describe('SiteCoverImageComponent', () => {
  let component: SiteCoverImageComponent;
  let fixture: ComponentFixture<SiteCoverImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteCoverImageComponent]
    });
    fixture = TestBed.createComponent(SiteCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
