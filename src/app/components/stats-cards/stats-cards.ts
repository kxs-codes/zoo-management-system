import { Component, ViewChild, ElementRef, inject } from '@angular/core';
import { ChartService } from '../../services/chart-service';
import { ZOO_STATS_CHART_CONFIG } from '../../config/chart.config';
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

    this.chartService.getAnimalData().subscribe(data => {

      const config = ZOO_STATS_CHART_CONFIG(data);
      this.chart = new Chart(ctx, config);

     }); 
  }
}