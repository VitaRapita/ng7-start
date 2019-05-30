import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface Store {
  id: number;
  storeId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  region: string;
  assistant: string;
}

@Component({
  selector: 'bb-admin-stores-table',
  templateUrl: './admin-stores-table.component.html',
  styleUrls: ['./admin-stores-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminStoresTableComponent implements OnInit {
  displayedColumns: string[] = [
    'edit',
    'storeId',
    'name',
    'email',
    'phone',
    'address',
    'city',
    'postalCode',
    'region',
    'assistant'
  ];
  dataSource: MatTableDataSource<Store>;
  sliderColor = 'primary';

  @Input()
  stores: [Store];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor() {}

  ngOnInit() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.stores);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
