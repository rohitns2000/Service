import { Component,OnInit } from "@angular/core";
import {EmployeeService} from "./app.employeeservice"

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent implements OnInit{

    constructor(private service:EmployeeService){}

    empAll:any[]=[];

    ngOnInit(){
        this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);//or this.service.getAllEmployee().subscribe((data)=>this.empAll.push(data));
    }

    empDelete(i){
        this.empAll.splice(i,1);
    }

}