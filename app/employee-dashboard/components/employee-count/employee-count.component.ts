import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee.interface';

@Component({
    selector: 'employee-count',
    template: `
    <div>
        <h3>Employees</h3>
        <div>
            Total Active Employees {{ activeEmployees() }} / {{ items.length }}
        </div>
    </div>
    `
})

export class EmployeeCountComponent {
    @Input()
    items: Employee[];

    activeEmployees(): number {
        if(!this.items) return;
        return this.items.filter((employee: Employee) => {
        return employee.checkedIn;
    }).length;
    }
    constructor(){

    }
}