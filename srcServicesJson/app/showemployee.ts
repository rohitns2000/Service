import { Component,OnInit, Input, SimpleChanges } from "@angular/core";
import {EmployeeService} from "./app.employeeservice"

@Component({
    selector:"show",
    templateUrl:"showemployee.html"
})
export class showEmployee{
    empAll:any[]=[];
    constructor(private service:EmployeeService){}

    ngOnInit(){
        this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
        // console.log(this.inchild[0])//or this.service.getAllEmployee().subscribe((data)=>this.empAll.push(data)
        //alert("Hello");
    }

    @Input()
    inchild:any[]=[]
    @Input()
    status:boolean
    @Input()
    empty:boolean

    ngOnChanges(changes:SimpleChanges):any{
        if(changes['status']){
        if(this.empty==false){
            this.empAll.push(this.inchild[0])
        }
        
    }}
    empDelete(i){
        this.empAll.splice(i,1);
    }


}