import { Component, OnInit } from '@angular/core';
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

  constructor(){}

  ngOnInit() {
    this.employees  = [{
    id:1,
    fullname: 'deian radev',
    checkedIn: true,
    startDate: null,
    skills: [{name:'marketing', yearsExperience: 4}]
  },
  {
    id:2,
    fullname: 'mary price',
    checkedIn: false,
    startDate: 1269302400,
    skills: [{name:'coding', yearsExperience: 19}]
  },
  {
    id:3,
    fullname: 'brian smith',
    checkedIn: true,
    startDate: 1418299200,
    skills: [{name:'sales', yearsExperience:8}, {name:'public speaking', yearsExperience:2}]
  },
  {
    id:4,
    fullname: 'stacy green',
    checkedIn: false,
    startDate: null,
    skills: null
  }]
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