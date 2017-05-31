import { Injectable } from '@angular/core';
import { Employee } from './models/employee.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const EMPLOYEE_API: string = '/api/employees';

@Injectable()
export class EmployeeDashboardService {
    constructor(private http: Http){}

    getEmployees(): Observable<Employee[]>{
        return this.http
            .get(EMPLOYEE_API)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: any)=> Observable.throw(error.json()))
    }

    updateEmployee(employee: Employee): Observable<Employee>{
    return this.http
        .put(`${EMPLOYEE_API}/${employee.id}`, employee)
        .map((response: Response) => {
            return response.json();
        })
        .catch((error: any)=> Observable.throw(error.json()))
    }

    removeEmployee(employee: Employee): Observable<Employee>{
    return this.http
        .delete(`${EMPLOYEE_API}/${employee.id}`)
        .map((response: Response) => {
            return response.json();
        })
        .catch((error: any)=> Observable.throw(error.json()))
    }    
}