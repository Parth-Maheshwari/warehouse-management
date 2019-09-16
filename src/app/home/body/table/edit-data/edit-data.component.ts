import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { InventoryService } from 'src/app/inventory.service';
import { inventory } from 'src/app/interfaces/inventory';
import { Router, ActivatedRoute } from '@angular/router';


// for displaying a contents of a product
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  public editing = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private _inventoryService: InventoryService
  ) { }

  ngOnInit() {
    console.log(this.data);
  }
  editDataForm = this.fb.group({
    id: [this.data.id],
    objectid: [this.data.objectid],
    productname: [this.data.productname, Validators.required],
    category: [this.data.category, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    availableunits: [this.data.availableunits, [Validators.required, Validators.min(1)]],
    unitprice: [this.data.unitprice, [Validators.required, Validators.min(1)]],
    lastupdated: [Date()],
    tags: this.fb.group({
      tag1: [this.data.tags.tag1],
      tag2: [this.data.tags.tag2],
      tag3: [this.data.tags.tag3]
    }),
    location: this.fb.group({
      area: [this.data.location.area, Validators.required],
    zone: [this.data.location.zone, Validators.required],
    shelf: [this.data.location.shelf, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    }),
    description: [this.data.description, [Validators.required, Validators.minLength(20)]],
  })

  editData() {
    this.editing = true;
  }
  onSubmit(user) {
    console.log(user.value);
    this._inventoryService.update(user.value).subscribe((data)=>{
      console.log("finalll ::", data);
    });
  }


  tiles: Tile[] = [
    { text: 'Product Id', cols: 1, rows: 1, color: '#faecc3' },
    { text: (this.data.id + 1), cols: 2, rows: 1, color: '#faecc3' },
    { text: 'Product Name', cols: 1, rows: 1, color: '#e1f1fa' },
    { text: this.data.productname, cols: 2, rows: 1, color: '#e1f1fa' },
    { text: 'Category', cols: 1, rows: 1, color: '#faecc3' },
    { text: this.data.category, cols: 2, rows: 1, color: '#faecc3' },
    { text: 'Avaialable Units', cols: 1, rows: 1, color: '#e1f1fa' },
    { text: this.data.availableunits, cols: 2, rows: 1, color: '#e1f1fa' },
    { text: 'Unit Price', cols: 1, rows: 1, color: '#faecc3' },
    { text: this.data.unitprice, cols: 2, rows: 1, color: '#faecc3' },
    { text: 'Tags', cols: 1, rows: 1, color: '#e1f1fa' },
    { text: this.data.tags.tag1 + '+' + this.data.tags.tag2 + '+' + this.data.tags.tag3, cols: 2, rows: 1, color: '#e1f1fa' },
    { text: 'Last Updated', cols: 1, rows: 1, color: '#faecc3' },
    { text: this.data.lastupdated, cols: 2, rows: 1, color: '#faecc3' },
    { text: 'Area', cols: 1, rows: 1, color: '#e1f1fa' },
    { text: this.data.location.area, cols: 2, rows: 1, color: '#e1f1fa' },
    { text: 'Zone', cols: 1, rows: 1, color: '#faecc3' },
    { text: this.data.location.zone, cols: 2, rows: 1, color: '#faecc3' },
    { text: 'Shelf', cols: 1, rows: 1, color: '#e1f1fa' },
    { text: this.data.location.shelf, cols: 2, rows: 1, color: '#e1f1fa' },
    { text: 'Description', cols: 1, rows: 2, color: '#faecc3' },
    { text: this.data.description, cols: 2, rows: 2, color: '#faecc3' }
  ];
}
