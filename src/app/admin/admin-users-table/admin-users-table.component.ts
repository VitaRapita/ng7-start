import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

export interface User {
  id: number;
  // photo: string,
  name: string;
  email: string;
  storeId: string;
  lastLogin: string;
  numberOfLogins: string;
  role: string;
  active: boolean;
  admin: boolean;
}

@Component({
  selector: 'bb-admin-users-table',
  templateUrl: './admin-users-table.component.html',
  styleUrls: ['./admin-users-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersTableComponent implements OnInit {
  displayedColumns: string[] = [
    'photo',
    'name',
    'email',
    'storeId',
    'lastLogin',
    'numberOfLogins',
    'role',
    'active',
    'admin'
  ];
  dataSource: MatTableDataSource<User>;
  sliderColor = 'primary';

  @Input()
  users: [User];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  @Output()
  changeSlider = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.setTableData();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setTableData() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  changeSliderMethod() {
    this.changeSlider.emit(this.users);
  }
}
