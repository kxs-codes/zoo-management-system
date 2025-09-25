import { Component } from '@angular/core';
import { VerticalTaskBar } from '../vertical-task-bar/vertical-task-bar';
import { StatsCards } from "../stats-cards/stats-cards";
import { FeedingSchedule } from "../feeding-schedule/feeding-schedule";
import { EnclosureCards } from "../enclosure-cards/enclosure-cards";

@Component({
  selector: 'app-content-container',
  imports: [VerticalTaskBar, StatsCards, FeedingSchedule, EnclosureCards],
  templateUrl: './content-container.html',
  styleUrl: './content-container.css'
})
export class ContentContainer {

}
