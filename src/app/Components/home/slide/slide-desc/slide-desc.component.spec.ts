import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideDescComponent } from './slide-desc.component';

describe('SlideDescComponent', () => {
  let component: SlideDescComponent;
  let fixture: ComponentFixture<SlideDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
