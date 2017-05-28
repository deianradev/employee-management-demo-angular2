import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Employee } from '../../models/employee.interface';

@Component({
    selector: 'employee-detail',
    styleUrls: ['employee-detail.component.scss'],
    template: `
    <div>
        <span class="status" [ngClass]="{'checked-in': detail.checkedIn}"></span>
          <div *ngIf="editing">
            <input type="text" 
            [value]="detail.fullname"
            (input)="onNameChange(name.value)"
            #name>
          </div>
          <div *ngIf="!editing">
          {{ detail.fullname }}
        </div>
          <div class="date">
          Start Date:
          {{ detail.startDate ? (detail.startDate | date: 'yMMMd') : 'not started'}}
          </div>

          <div class="skills">
             Skills:
              <span>
              {{ detail.skills?.length || 'None' }}
              </span>
          </div>
          <button (click)="toggleEdit()">
            {{ editing ? 'Done' : 'Edit'}}
          </button>
        <button (click)="onRemove()">
            Remove
          </button>
    </div>
    `
})

export class EmployeeDetailComponent implements OnChanges {
    
    @Input()
    detail: Employee;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    constructor(){

    }
    //@Output()
    onNameChange(value: string){
        this.detail.fullname = value;
    }

    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing
    }

    onRemove(){
        this.remove.emit(this.detail);
    }
    ngOnChanges(changes){
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
    }
}