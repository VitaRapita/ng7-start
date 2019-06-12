import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { OverviewService } from '../../overview/services/overview.service';
import IArticle from '../../interfaces/article.interface';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'bb-archive-container',
  templateUrl: './archive-container.component.html',
  styleUrls: ['./archive-container.component.scss']
})
export class ArchiveContainerComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'name',
    'storeId',
    'adapted',
    'type',
    'week',
    'status'
  ];
  dataSource!: MatTableDataSource<IArticle>;
  articles: IArticle[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

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
    this.overviewService.getArticles().subscribe((data: [IArticle]) => {
      this.articles = data;
      this.setTableData();
    });
  }

  ngOnDestroy() {}
}
