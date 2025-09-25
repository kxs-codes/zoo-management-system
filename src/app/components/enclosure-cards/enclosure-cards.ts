import { Component } from '@angular/core';
import { Enclosure } from '../../models/enclosure';
import { AnimalCards } from "../animal-cards/animal-cards";

@Component({
  selector: 'app-enclosure-cards',
  imports: [AnimalCards],
  templateUrl: './enclosure-cards.html',
  styleUrl: './enclosure-cards.css'
})
export class EnclosureCards {

  enclosures: Enclosure[] = [
      {
        id: 1,
        name: 'Savannah Zone',
        type: 'Safari',
        caretaker: 'John Doe',
        capacity:2,
        animals: [
          { name: 'Leo', species: 'Lion', age: 5, health: 'Healthy', feedingTime: '10:00 AM' },
          { name: 'Zara', species: 'Zebra', age: 3, health:'Sick', feedingTime: '11:00 AM' }
        ]
      },
      {
        id: 2,
        name: 'Aquatic Habitat',
        type: 'Aquatic',
        caretaker: 'Jane Smith',
        capacity:4,
        animals: [
          { name: 'Splash', species: 'Penguin', age: 2, health: 'Hospice' ,feedingTime: '2:00 PM' }
        ]
      }
    ];

}
