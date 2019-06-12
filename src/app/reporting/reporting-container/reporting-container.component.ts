import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportingService } from '../sercices/reporting.service';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'bb-reporting-container',
  templateUrl: './reporting-container.component.html',
  styleUrls: ['./reporting-container.component.scss']
})
export class ReportingContainerComponent implements OnInit, OnDestroy {
  reportForm: FormGroup;

  view = [800, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = '';
  legendPosition = 'below';
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'aangemaakt';
  showGridLines = true;
  innerPadding = '10%';
  animations: boolean = true;
  barChart?: any[];
  lineChartSeries?: any[];
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b', '#7aa3e5']
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b']
  };

  showRightYAxisLabel: boolean = false;
  yAxisLabelRight: string = 'Utilization';

  constructor(
    private fb: FormBuilder,
    private reportingService: ReportingService
  ) {
    this.reportForm = this.fb.group({
      oms: '',
      regions: '',
      stores: '',
      unit: '',
      sortBy: '',
      toon: ''
    });
  }
  ngOnInit() {
    this.getBarChartData();
    this.getLineChartData();
  }

  getBarChartData() {
    this.reportingService.getBarChartData().subscribe((data: any) => {
      this.barChart = data;
    });
  }

  getLineChartData() {
    this.reportingService.getLineChartData().subscribe((data: any) => {
      this.lineChartSeries = data;
    });
  }

  filterChange() {}

  ngOnDestroy() {}
}
