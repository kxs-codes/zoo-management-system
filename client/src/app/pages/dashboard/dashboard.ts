import { Component } from '@angular/core';
import { StatsCards } from "../../components/stats-cards/stats-cards";
import { VerticalTaskBar } from "../../components/vertical-task-bar/vertical-task-bar";
import { ContentContainer } from "../../components/content-container/content-container";

@Component({
  selector: 'app-dashboard',
  // imports: [StatsCards],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
  imports: [VerticalTaskBar, ContentContainer]
})
export class Dashboard {

}
