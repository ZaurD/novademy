import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyNovademyComponent } from './why-novademy.component';

describe('WhyNovademyComponent', () => {
  let component: WhyNovademyComponent;
  let fixture: ComponentFixture<WhyNovademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyNovademyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyNovademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
