import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { ChartService } from '../../services/chart-service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.html',
  styleUrls: ['./stats-cards.css']
})


export class StatsCards  {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart | null = null;

  constructor() {}

  chartService = inject(ChartService)


  ngAfterContentInit() {

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Unable to get canvas 2D context');
      return;
    }

    this.chartService.getChartData().subscribe(data => {

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Zoo Stats'] ,
        datasets: [
          {
            label: 'Total Animals',
            data: [data.totalAnimals],            
          },
          {
            label: '# of Enclosures',
            data: [data.enclosures],
          },
          {
            label: '# of Feeding Task',
            data: [data.feedingTasks],
          },
          {
            label: 'Alert Count',
            data: [data.alerts],
          }
      ]},
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

     }); 
  }
}