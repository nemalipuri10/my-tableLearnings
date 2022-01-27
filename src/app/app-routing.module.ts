import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
//import { TableComponent } from './table/table.component';
import { Table2Component} from './table2/table2.component';
import { Table3Component} from './table3/table3.component';
import { Table4Component} from './table4/table4.component';
import { Table5Component} from './table5/table5.component';
import { Table6Component} from './table6/table6.component';
import { Table7Component} from './table7/table7.component';
import { Table8Component} from './table8/table8.component';
import { Table9Component} from './table9/table9.component';
import { Table10Component} from './table10/table10.component';
import { Table11Component} from './table11/table11.component';
import { Table12Component} from './table12/table12.component';
import { Table13Component} from './table13/table13.component';

const routes:Routes=[
  {path: 'app', component:AppComponent},
  //{path: 'table', component:TableComponent},
  {path: 'table2', component:Table2Component},
  {path: 'table3', component:Table3Component},
  {path: 'table4', component:Table4Component},
  {path: 'table5', component:Table5Component},
  {path: 'table6', component:Table6Component},
  {path: 'table7', component:Table7Component},
  {path: 'table8', component:Table8Component},
  {path: 'table9', component:Table9Component},
  {path: 'table10', component:Table10Component},
  {path: 'table11', component:Table11Component},
  {path: 'table12', component:Table12Component},
  {path: 'table13', component:Table13Component},

]
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule
  ]
})
export class AppRoutingModule { }
