import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTaskBar } from './vertical-task-bar';

describe('VerticalTaskBar', () => {
  let component: VerticalTaskBar;
  let fixture: ComponentFixture<VerticalTaskBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalTaskBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalTaskBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
