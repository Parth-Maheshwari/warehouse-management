import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { InventoryService } from 'src/app/inventory.service';
import { inventory } from 'src/app/interfaces/inventory';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb : FormBuilder,
    private _inventoryService: InventoryService
  ) { }
  
    

  ngOnInit() {
    // console.log("add-data");
  }
  objectId () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  categories = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQR"];
  editDataForm = this.fb.group({
    objectid : [this.objectId()],
    productname: ['', Validators.required],
    category: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    availableunits: [parseInt(''),[Validators.required, Validators.min(1)]],
    unitprice: [parseInt(''),[Validators.required, Validators.min(1)]],
    lastupdated : [Date()],
    tags: this.fb.group({
      tag1: [''],
      tag2: [''],
      tag3: ['']
    }),
    location: this.fb.group({
      area: ['',Validators.required],
      zone: ['',Validators.required],
      shelf: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    }),      
    description: ['',[Validators.required,Validators.minLength(20)]],
  });
  
 
  onSubmit(user){
    console.log("user value",user.value);
    this._inventoryService.save(user.value).subscribe(
      (data: inventory) =>{
        console.log("data",data);
        // this.router.navigate(['../'], {relativeTo: this.route});
      }
    )
  }
  
}
