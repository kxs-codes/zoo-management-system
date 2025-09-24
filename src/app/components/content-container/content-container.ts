import { Component } from '@angular/core';
import { VerticalTaskBar } from '../vertical-task-bar/vertical-task-bar';
import { StatsCards } from "../stats-cards/stats-cards";

@Component({
  selector: 'app-content-container',
  imports: [VerticalTaskBar, StatsCards],
  templateUrl: './content-container.html',
  styleUrl: './content-container.css'
})
export class ContentContainer {

}
