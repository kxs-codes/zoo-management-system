import { Component } from '@angular/core';

@Component({
  selector: 'app-feeding-schedule',
  imports: [],
  templateUrl: './feeding-schedule.html',
  styleUrl: './feeding-schedule.css'
})
export class FeedingSchedule {
  
 schedule = [
    {
      name: 'Lenny',
      animal: 'Lion',
      time: '10:00 AM',
      food: 'Meat',
      frequency: 2,
      caretaker: 'John Doe'
    },
    {
      name: 'Clyde',
      animal: 'Elephant',
      time: '12:00 PM',
      food: 'Fruits',
      frequency: 2,
      caretaker: 'Jane Smith'
    },
    {
      name: 'Perry',
      animal: 'Penguin',
      time: '2:00 PM',
      food: 'Fish',
      frequency: 2,
      caretaker: 'Sam Lee'
    }
  ];
  
}
