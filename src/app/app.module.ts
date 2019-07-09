import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes,RouterModule} from '@angular/router'
import { AppComponent }  from './app.component'; 
import { ShowEmployeeComponent } from './app.showemployee';
import { AddEmployeeComponent } from './app.addemployee';
import { SearchEmployeeComponent } from './app.searchemployee';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

const routes:Routes=[
    {path:'add',component:AddEmployeeComponent},
    {path:'show',component:ShowEmployeeComponent},
    {path:'search',component:SearchEmployeeComponent},
    {path:'',component:AddEmployeeComponent}
];

@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule
    ],
    declarations: [
        AppComponent,
        ShowEmployeeComponent,
        AddEmployeeComponent,
        SearchEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }