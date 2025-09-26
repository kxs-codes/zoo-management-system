import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosureCards } from './enclosure-cards';

describe('EnclosureCards', () => {
  let component: EnclosureCards;
  let fixture: ComponentFixture<EnclosureCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnclosureCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnclosureCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
