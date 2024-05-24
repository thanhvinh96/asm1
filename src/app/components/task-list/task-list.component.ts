import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ITask } from '../../itask';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  search = '';
  tasks: ITask[] = [];
  searchSP():void{
    this.tasks = this.list_task.filter(
      item =>item.ten_task.toLowerCase().includes(this.search.toLocaleLowerCase())
    )
  }
  list_task:ITask[] = [];
  ngOnInit(): void {
    fetch(`http://localhost:3000/task`)
    .then(res=>res.json())
    .then(data=>{
      this.list_task = data;
    })
    this.tasks = this.list_task
  }
}
