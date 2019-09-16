import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../../inventory.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditDataComponent } from './edit-data/edit-data.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public inventory = [];
  public dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public displayedColumns: string[] = ['id', 'productname', 'category', 'availableunits', 'unitprice'];
  constructor(
    private _inventory: InventoryService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }
  ngOnInit() {
    this.loadInventory();
  }
  loadInventory() {
    this._inventory.behaviorsubject.subscribe(
      data => {
        this.inventory = data;
        this.dataSource = new MatTableDataSource(this.inventory);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();

    }
  }

  addData() {
          // console.log(this.dataSource.filteredData[0].tags);
    console.log("calling add data");
    this.router.navigate(['addData'], { relativeTo: this.route });
    
  }

  editing(row){
    // console.log(row);
    const dialogRef = this.dialog.open(EditDataComponent, {
      width: '80%',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}


