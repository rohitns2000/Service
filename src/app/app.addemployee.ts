import { Component } from "@angular/core";
import { EmployeeService } from "./app.employeeservice";  

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent{
    //empAll:any[]=[];
    empId:number=123;
    empName:string="Rohit";
    empSalary:number=10000;
    empDepartment:string="Lol";
    // status:boolean=false;
    // empty:boolean=true;
    constructor(emp:EmployeeService)
    {
        // this.empAll[0] ={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
        // this.status=!this.status;
        // this.empty=false
        emp.setEmployee(this.empId,this.empName,this.empSalary,this.empDepartment);
    }

    toService(){

    }

    
}