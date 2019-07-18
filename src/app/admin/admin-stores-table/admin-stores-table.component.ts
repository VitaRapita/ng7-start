import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import IStore from '../../interfaces/store.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  dataSource!: MatTableDataSource<IStore>;
  editedStoreForm: FormGroup;

  @Input()
  stores!: IStore[];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  @Output()
  editStore = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.editedStoreForm = this.fb.group({
      id: 0,
      email: [
        { value: '', disabled: true },
        [Validators.required, Validators.email]
      ],
      phone: ['', [Validators.required, Validators.minLength(8)]],
      name: [
        { value: '', disabled: true },
        [Validators.required, Validators.minLength(3)]
      ],
      first_name: '',
      last_name: '',
      role: [{ value: '', disabled: true }],
      assistant: '',
      storeASM: '',
      store_id: ['', [Validators.required]],
      avatar: '',
      team_photo: ''
    });
  }

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

  editStoreToggle(item: IStore) {
    this.editStore.emit(item);
  }
}
