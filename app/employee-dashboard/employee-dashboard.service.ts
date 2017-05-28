import { Injectable } from '@angular/core';
import { Employee } from './models/employee.interface';
import { Http } from '@angular/http';

@Injectable()
export class EmployeeDashboardService {
    constructor(private http: Http){}

    getEmployees(): Employee[]{
        return [{
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
}