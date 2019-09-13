import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log("add-data");
  }

}
