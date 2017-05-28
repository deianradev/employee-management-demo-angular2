import { Component, OnInit } from '@angular/core';

import { EmployeeDashboardService } from '../../employee-dashboard.service';

import { Employee } from '../../models/employee.interface';

@Component({
    selector: 'employee-dashboard',
    styleUrls: ['employee-dashboard.component.scss'],
    template: ` 
    <div>
    <employee-count
    [items]="employees"
    ></employee-count>

    <employee-detail
      *ngFor="let employee of employees;"
      [detail]="employee"
      (remove)="handleRemove($event)"
      (edit)="handleEdit($event)"
    ></employee-detail>
    </div>
    `
})
export class EmployeeDashboardComponent implements OnInit {


  employees: Employee[];

  constructor(private employeeService: EmployeeDashboardService){}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
  
  handleRemove(event: Employee){
    this.employees = this.employees.filter((employee: Employee)=> {
      return employee.id !== event.id;
    })
  }
  handleEdit(event: Employee){
    this.employees = this.employees.map((employee: Employee)=>{
      if(employee.id === event.id){
        employee = Object.assign({}, employee, event)
      }
      return employee;
    })
    
  }

      ngOnChanges(changes){
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
    }
}