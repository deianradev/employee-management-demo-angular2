import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//containers
import { EmployeeDashboardComponent } from './containers/employee-dashboard/employee-dashboard.component'

//components
import { EmployeeCountComponent } from './components/employee-count/employee-count.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';

@NgModule({
    declarations: [
        EmployeeDashboardComponent,
        EmployeeCountComponent,
        EmployeeDetailComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        EmployeeDashboardComponent
    ]
})
export class EmployeeDashboardModule {}