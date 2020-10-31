import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartService } from 'src/app/services/chart.service';
import { Chart } from '../../../models/chart.model';

@Component({
  selector: 'trade-volume',
  templateUrl: './trade-volume.component.html',
  styleUrls: ['./trade-volume.component.scss']
})
export class TradeVolumeComponent implements OnInit {
  tvChart: Chart;
  subscription: Subscription;

  constructor(private chartService: ChartService) {
    this.tvChart = new Chart(['Date', 'USD'], { hAxis: { title: 'Date' }, vAxis: { title: 'USD' } })
  }

  ngOnInit(): void {
    this.chartService.loadTVChart();
    this.subscription = this.chartService.tvChart$.subscribe(chart => {
      this.tvChart.setDataFromChart(chart);
    })
  }
}
