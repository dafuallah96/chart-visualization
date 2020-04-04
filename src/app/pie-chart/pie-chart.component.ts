import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public chartType: string = "pie";
  public chartLabel: string[] = [];
  public chartData: number[] = [];

  public chartLastLabel: string[] = [];
  public chartLastData: number[] = [];

  chartFilled() {
    this.chartLabel.push('Null', 'Forced Closed', 'Closed', 'GM_Terminated');
    this.chartData.push(16.67, 18.25, 61.9, 3.17);

    this.chartLastLabel.push('1', '2');
    this.chartLastData.push(9.35, 90.65);
  }

  chartOptions = {

    animation: {
      duration: 1000,
      easing: "easeInOutQuad"
    },

    responsive: true,
    legend: {
      display: true,
      position: "right",
      fullWidth: false,
      reverse: true
    },
  };


  ngOnInit() {
    this.chartFilled();
  }

}
