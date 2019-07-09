import { Injectable, Input} from "@angular/core";
import{HttpClient} from '@angular/common/http'

@Injectable({
    providedIn:'root'
})
export class EmployeeService{

    //empAll:any[]=[];
    empId:number;
    empName:string;
    empSalary:number;
    empDepartment:string;

    constructor(private http:HttpClient){}

    getAllEmployee(){
        return this.http.get("assets/employee.json");
    }
  
  setEmployee(empId,empName,empSalary,empDepartment) {  
    //debugger;  
    this.empId=empId;
    this.empName=empName;
    this.empSalary=empSalary;
    this.empDepartment=empDepartment;
    // this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment})
    //  alert(this.empId)
  }  
  
  getId():any {  
    return this.empId;  
  }
  getName():any {  
    return this.empName;  
  }
  getSalary():any {  
    return this.empSalary;  
  }
  getDepartment():any {  
    return this.empDepartment;  
  }

}