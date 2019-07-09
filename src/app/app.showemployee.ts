import { Component,OnInit } from "@angular/core";
import {EmployeeService} from './app.employeeservice'

@Component({
    selector:'show-comp',
    templateUrl:'showemployee.html'
})
export class ShowEmployeeComponent {

    empAll:any[]=[];
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    constructor(private myservice:EmployeeService)
    {
        this.empId = myservice.getId();
        this.empName = myservice.getName();
        this.empSalary = myservice.getSalary();
        this.empDepartment = myservice.getDepartment();
        alert(this.empId)
        this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment})
    }

    // ngOnInit(): void {
    //     this.myservice.getAllEmployee().subscribe((data:any)=>this.empAll=data)
    // }


    
}