import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enclosure } from './enclosure';

describe('Enclosure', () => {
  let component: Enclosure;
  let fixture: ComponentFixture<Enclosure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enclosure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enclosure);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
