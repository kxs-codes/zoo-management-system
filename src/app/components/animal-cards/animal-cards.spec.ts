import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCards } from './animal-cards';

describe('AnimalCards', () => {
  let component: AnimalCards;
  let fixture: ComponentFixture<AnimalCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
