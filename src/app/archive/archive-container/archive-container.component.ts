import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OverviewService } from '../../overview/services/overview.service';

export interface Article {
  id: number;
  name: string;
  storeId: string;
  articleName: string;
  type: string;
  week: string;
  year: string;
  status: string;
}

@Component({
  selector: 'bb-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'storeId',
    'adapted',
    'type',
    'week',
    'status'
  ];
  dataSource: MatTableDataSource<Article>;
  articles: [Article];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private overviewService: OverviewService) {}

  ngOnInit() {
    this.getArticles();
  }

  filterByWeek(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(filterValue: string) {
    console.log(this.dataSource);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setTableData() {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.articles);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getArticles() {
    this.overviewService.getArticles().subscribe((data: [Article]) => {
      this.articles = data;
      this.setTableData();
    });
  }
}
