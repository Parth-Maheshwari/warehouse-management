import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../../inventory.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

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

  public displayedColumns: string[] = ['productname', 'category', 'availableunits', 'unitprice', 'description'];
  constructor(
    private _inventory: InventoryService,
    private router: Router,
    private route: ActivatedRoute
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
    console.log("calling add data");
    this.router.navigate(['./addData'], { relativeTo: this.route });
    
  }
  editData(){
    this.router.navigate(['./editData'], {relativeTo: this.route});
    console.log("calling edit data");
  }
}
