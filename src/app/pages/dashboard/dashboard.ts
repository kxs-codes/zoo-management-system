import { Component } from '@angular/core';
import { StatsCards } from "../../components/stats-cards/stats-cards";

@Component({
  selector: 'app-dashboard',
  imports: [StatsCards],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
