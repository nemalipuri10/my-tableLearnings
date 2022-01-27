import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
import { Table4Component } from './table4/table4.component';
import { Table5Component } from './table5/table5.component';
import { Table6Component } from './table6/table6.component';
import { Table7Component } from './table7/table7.component';
import { Table8Component } from './table8/table8.component';
import { Table9Component } from './table9/table9.component';
import { Table10Component } from './table10/table10.component';
import { Table11Component } from './table11/table11.component';
import { Table12Component } from './table12/table12.component';
import { Table13Component } from './table13/table13.component';


@NgModule({
  declarations: [
    AppComponent,
    // TableComponent,
    Table2Component,
    Table3Component,
    Table4Component,
    Table5Component,
    Table6Component,
    Table7Component,
    Table8Component,
    Table9Component,
    Table10Component,
    Table11Component,
    Table12Component,
    Table13Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
