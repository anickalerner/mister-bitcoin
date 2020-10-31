import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChartService } from 'src/app/services/chart.service';
import { Chart } from '../../../models/chart.model';
@Component({
  selector: 'market-price',
  templateUrl: './market-price.component.html',
  styleUrls: ['./market-price.component.scss']
})
export class MarketPriceComponent implements OnInit {
  mpChart: Chart;
  subscription: Subscription;

  constructor(private chartService: ChartService) {
    this.mpChart = new Chart(['Date', 'USD'], { hAxis: { title: 'Date' }, vAxis: { title: 'USD' } })
  }

  ngOnInit(): void {
    this.chartService.loadMPChart();
    this.subscription = this.chartService.mpChart$.subscribe(chart => {
      this.mpChart.setDataFromChart(chart);      
    })
  }
}