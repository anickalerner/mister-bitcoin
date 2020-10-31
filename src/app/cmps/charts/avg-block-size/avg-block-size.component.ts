import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartService } from 'src/app/services/chart.service';
import { Chart } from '../../../models/chart.model';

@Component({
  selector: 'avg-block-size',
  templateUrl: './avg-block-size.component.html',
  styleUrls: ['./avg-block-size.component.scss']
})
export class AvgBlockSizeComponent implements OnInit {
  absChart: Chart;
  subscription: Subscription;

  constructor(private chartService: ChartService) {
    this.absChart = new Chart(['Date', 'USD'], { hAxis: { title: 'Date' }, vAxis: { title: 'USD' } })
  }

  ngOnInit(): void {
    this.chartService.loadABSChart();
    this.subscription = this.chartService.absChart$.subscribe(chart => {
      this.absChart.setDataFromChart(chart);
    })
  }
}
