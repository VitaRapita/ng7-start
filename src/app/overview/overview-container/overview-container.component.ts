import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import { OverviewService } from '../services/overview.service';
import IArticle from '../../interfaces/article.interface';
import IApiArticleResults from '../../interfaces/article.interface';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { ConfirmationDialogComponent } from '../../shared/dialogs/confirmation-dialog/confirmation-dialog.component';

@AutoUnsubscribe()
@Component({
  selector: 'bb-overview-container',
  templateUrl: './overview-container.component.html',
  styleUrls: ['./overview-container.component.scss']
})
export class OverviewContainerComponent implements OnInit, OnDestroy {
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
  dataSource!: MatTableDataSource<IArticle>;
  articles: IArticle[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  pageSize = 5;
  currentPage = 0;
  articlesCount!: number;

  constructor(
    private overviewService: OverviewService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getArticles(this.pageSize, this.currentPage + 1);
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

  getArticles(count: number, page: number) {
    this.overviewService
      .getArticles(count, page)
      .subscribe((data: IApiArticleResults) => {
        this.articles = data.results;
        this.articlesCount = data.count;
        this.setTableData();
      });
  }

  deleteArticle(id: number) {
    this.overviewService.deleteArticle(id).subscribe(() => {
      this.getArticles(this.pageSize, this.currentPage + 1);
    });
  }

  declineArticle(id: number) {
    this.overviewService.declineArticle(id).subscribe(() => {
      this.getArticles(this.pageSize, this.currentPage + 1);
    });
  }

  changePage(event: any) {
    this.getArticles(event.pageSize, event.pageIndex + 1);
  }

  openDialog(id: number, action: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '50rem',
      data: `Do you confirm the ${action} of this data?`
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        switch (action) {
          case 'delete':
            this.deleteArticle(id);
            break;
          case 'decline':
            this.declineArticle(id);
            break;
          default:
            break;
        }
      }
    });
  }

  ngOnDestroy() {}
}
