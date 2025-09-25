import { Component } from '@angular/core';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-animal-cards',
  imports: [],
  templateUrl: './animal-cards.html',
  styleUrl: './animal-cards.css'
})
export class AnimalCards {
  animals: Animal[] = [
    {
      name: "Rory",
      age: 21,
      species: "Lion",
      health: 'Sick'
    },
    {
      name: "Clyde",
      age: 52,
      species: 'Elephant',
      health: 'Healthy'
    }
  ]
}
