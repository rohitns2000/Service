import { Component} from "@angular/core";
//import {EmployeeService} from "./app.employeeservice"

@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent {
    empAll:any[]=[];
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;
    status:boolean;
    empty:boolean=true;

    toShow()
    {
        this.empAll[0] ={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
        this.status=!this.status;
        this.empty=false
    }
}