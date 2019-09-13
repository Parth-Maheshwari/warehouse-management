import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { NavComponent } from './home/nav/nav.component';
import { GraphicalRepComponent } from './home/body/graphical-rep/graphical-rep.component';
import { TableComponent } from './home/body/table/table.component';
import { AddDataComponent } from './home/body/table/add-data/add-data.component';
import { EditDataComponent } from './home/body/table/edit-data/edit-data.component';
import { PageDoesntExistComponent } from './page-doesnt-exist/page-doesnt-exist.component';

const routes: Routes = [
  
  {
    path: "home", component: HomeComponent,
    children: [
      { path: "nav", component: NavComponent },
      {
        path: "body", component: BodyComponent,
        children: [
          { path: "graphicalRep", component: GraphicalRepComponent },
          {
            path: "table", component: TableComponent,
            children: [
              { path: "addData", component: AddDataComponent },
              { path: "editData", component: EditDataComponent }
            ]
          }
        ]
      }
    ]
  },
  { path: "", component: LandingPageComponent },
  { path: "**", component: PageDoesntExistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
