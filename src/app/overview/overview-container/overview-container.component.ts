import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OverviewService } from '../services/overview.service';

export interface Article {
  id: number;
  photo: string;
  name: string;
  storeId: string;
  articleName: string;
  editDate: string;
  type: string;
  week: string;
  year: string;
  ready: boolean;
  status: string;
}

@Component({
  selector: 'bb-overview-container',
  templateUrl: './overview-container.component.html',
  styleUrls: ['./overview-container.component.scss']
})
export class OverviewContainerComponent implements OnInit {
  displayedColumns: string[] = [
    'edit',
    'name',
    'storeId',
    'adapted',
    'type',
    'week',
    'ready',
    'remove',
    'status',
    'reject'
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

  applyFilter(filterValue: string) {
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
